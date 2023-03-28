import * as React from 'react';
import {
  Autocomplete,
  createFilterOptions,
  TextField,
  Select
} from '@mui/material';
import {FC} from 'react';

interface SelectOptionType {
  inputValue?: string;
  label: string;
  value: string
}

interface Props {
  label: string;
  value: string;
  onChange: (event: React.SyntheticEvent<Element, Event>, value: string | SelectOptionType | null) => void;
  data: SelectOptionType[];
  className: string
}

const filter = createFilterOptions<SelectOptionType>();

export const AutoComplete: FC<Props> = ({label, value, onChange, data, className}) => {
  const getOptionLabel = (option: SelectOptionType | string) => {
    if (typeof option === 'string') {
      return option;
    }
    if (option.inputValue) {
      return option.inputValue;
    }
    return option.label;
  }

  const filterOptions = (options: SelectOptionType[], params: any) => {
    const filtered = filter(options, params);
    const isExisting = options.some((option) => option.label === params.inputValue);
    if (!isExisting && params.inputValue !== '') {
      filtered.push({
        inputValue: params.inputValue,
        label: `Add "${params.inputValue}"`,
        value: params.inputValue
      });
    }

    return filtered;
  }
  return (
    <Autocomplete
      value={value}
      onChange={onChange}
      filterOptions={filterOptions}
      selectOnFocus
      id='free_solo'
      className={className}
      clearOnBlur
      handleHomeEndKeys
      options={data}
      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => <li {...props}>{option.label}</li>}
      freeSolo
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
};

export default Select;
