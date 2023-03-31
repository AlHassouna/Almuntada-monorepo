import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {FC, ReactNode} from "react";

interface SelectOptionType {
  label: string;
  value: string
}

interface Props {
  label: string;
  value: string;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
  data: SelectOptionType[];
}

export const GenericSelect: FC<Props> = ({label, value, onChange, data}) => {
  return <Box sx={{minWidth: 120}}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
      >
        {data.map((value) => {
          return <MenuItem key={value?.value} value={value?.label}>{value.label}</MenuItem>
        })}
      </Select>
    </FormControl>
  </Box>
  
}


