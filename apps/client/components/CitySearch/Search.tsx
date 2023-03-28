import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {getCityList} from "@myworkspace/shared-types";
import {FC} from "react";

interface Props {
  label?: string
  size?: string
  onSelected?: (value: string) => void
}

export const GroupedCities: FC<Props> = ({label, size, onSelected}) => {
  const cityList = getCityList()
  const options = Object.values(cityList).map((option) => {
    const firstLetter = option.label[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  return (
    <Autocomplete
      sx={{
        width: size
      }
      }
      id="grouped-demo"
      onChange={(event, value) => onSelected(value?.label)}
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}



