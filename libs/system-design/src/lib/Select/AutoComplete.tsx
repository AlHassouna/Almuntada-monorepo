import * as React from "react";
import {
  Autocomplete,
  createFilterOptions,
  TextField,
  Select
} from "@mui/material";
import {FC} from "react";

interface SelectOptionType {
  inputValue?: string;
  label: string;
  value?: string;
  firstLetter?: string;
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

}

const filter = createFilterOptions<SelectOptionType>();

export const AutoComplete: FC<Props> = ({label, setFieldValue, data, freeSolo, w, value, name, handleBlur}) => {
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
        label: `Add "${params?.inputValue}"`,
        value: params?.inputValue,
        firstLetter: params?.inputValue[0]
      });
    }

    return filtered;
  };
  const options = data?.map((item) => {
      const firstLetter = item?.label[0]?.toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        label: item?.label
      };
    }
  );

  return (
    <Autocomplete
      sx={{width: w}}
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
      options={freeSolo ? data : options?.sort((a, b) => -b?.firstLetter?.localeCompare(a?.firstLetter))}
      getOptionLabel={getOptionLabel}
      renderOption={freeSolo ? (props, option: SelectOptionType) => <li {...props}>{option.label}</li> : undefined}
      freeSolo={freeSolo}
      groupBy={!freeSolo ? (option: SelectOptionType) => option?.firstLetter as string : undefined}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
};
