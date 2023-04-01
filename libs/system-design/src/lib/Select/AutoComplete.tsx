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
  onChange: (event: React.SyntheticEvent<Element, Event>, value: string | SelectOptionType | null) => void;
  data: SelectOptionType[];
  freeSolo: boolean;

  w?: string;

}

const filter = createFilterOptions<SelectOptionType>();

export const AutoComplete: FC<Props> = ({label, value, onChange, data, freeSolo, w}) => {
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
    const isExisting = options?.some((option: SelectOptionType) => option.label === params.inputValue);
    if (!isExisting && params.inputValue !== "") {
      filtered?.push({
        inputValue: params.inputValue,
        label: `Add "${params.inputValue}"`,
        value: params.inputValue,
        firstLetter: params.inputValue[0]
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

  return <Autocomplete
    sx={{width: w}}
    value={value}
    onChange={onChange}
    filterOptions={freeSolo ? filterOptions : undefined}
    selectOnFocus
    id="free_solo"
    clearOnBlur
    handleHomeEndKeys
    options={freeSolo ? data : options?.sort((a, b) => -b?.firstLetter?.localeCompare(a?.firstLetter))}
    getOptionLabel={getOptionLabel}
    renderOption={freeSolo ? (props, option: SelectOptionType) => <li {...props}>{option.label}</li> : undefined}
    freeSolo={freeSolo}
    groupBy={!freeSolo ? (option: SelectOptionType) => option?.firstLetter as string : undefined}
    renderInput={(params) => <TextField {...params} label={label}/>}
  />

};

export default Select;
