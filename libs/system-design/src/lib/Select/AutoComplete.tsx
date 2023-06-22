import * as React from "react";
import {
  Autocomplete,
  createFilterOptions,
  TextField,
} from "@mui/material";
import {FC} from "react";
import {useRouter} from "next/router";

interface SelectOptionType {
  inputValue?: string;
  label: string;
  value?: string;
  firstLetter?: string;
  disabled: boolean;
}

interface Props {
  label: string;
  value: string;
  setFieldValue: (event: any, newValue: any) => void;
  data: SelectOptionType[];
  freeSolo: boolean;
  name?: string
  w?: string;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  addNew?: string
  helperText?: string
}

const filter = createFilterOptions<SelectOptionType>();

export const
  AutoComplete: FC<Props> = ({
                               label,
                               setFieldValue,
                               data,
                               helperText,
                               freeSolo,
                               addNew,
                               w,
                               value,
                               name,
                               handleBlur
                             }) => {
    const {locale} = useRouter();
    const getOptionLabel = (option: SelectOptionType | string) => {
      if (typeof option === "string") {
        return option;
      }
      if (option?.inputValue) {
        return option?.inputValue;
      }
      return option?.label;
    };

    const filterOptions = (options: SelectOptionType[], params: any) => {
      const filtered = filter(options, params);
      const isExisting = options?.some((option) => option?.label === params?.inputValue);
      if (!isExisting && params.inputValue !== "") {
        filtered?.push({
          inputValue: params?.inputValue,
          label: `${addNew} "${params?.inputValue}"`,
          value: params?.inputValue,
          firstLetter: params?.inputValue[0],
          disabled: false
        });
      }

      return filtered;
    };
    const options = [
      ...(helperText ? [{
        inputValue: "",
        label: helperText,
        value: "",
        firstLetter: "",
        disabled: true
      }
      ] : []),
      ...(data?.map((item) => {
        const firstLetter = item?.label[0]?.toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
          label: item?.label,
          value: item?.value,
          disabled: item?.disabled
        };
      }) || []),
    ];
    return (
      <Autocomplete
        sx={{
          width: w,
          '& div': {
            '& div': {
              position: locale === 'en' ? '' : 'relative',
            }
          }
        }}
        value={value || null}
        onChange={(event, newValue: any) => {
          if (freeSolo) setFieldValue(name, newValue?.value)
          else setFieldValue(name, newValue?.label)
        }}
        filterOptions={freeSolo ? filterOptions : undefined}
        selectOnFocus
        clearOnBlur
        onBlur={handleBlur}
        isOptionEqualToValue={(option: SelectOptionType, value: SelectOptionType) => option?.value === value?.value}
        options={options}
        getOptionLabel={getOptionLabel}
        renderOption={(props, option: SelectOptionType) =>
          <li
            {...props}>{option.label}</li>
        }
        freeSolo={freeSolo}
        getOptionDisabled={(option: SelectOptionType) => option?.disabled}
        groupBy={(option: SelectOptionType) => option?.firstLetter as string}
        renderInput={(params) => <TextField
          sx={{
            "& label": {
              right: locale === 'en' ? 'unset!important' : '35px',
              transformOrigin: locale === 'en' ? 'left!important' : 'right',
            },
            "& legend": {
              textAlign: locale === 'en' ? 'left' : 'right',
            }, "& p": {
              textAlign: locale === 'en' ? 'left' : 'right',
              marginTop: '3px'
            }
          }}
          {...params} label={label}/>}
      />
    );
  };
