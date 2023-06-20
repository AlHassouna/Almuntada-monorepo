import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {FC} from "react";
import {useRouter} from "next/router";

interface SelectOptionType {
  label: string;
  value: string
}

interface Props {
  label: string;
  value: string;
  onChange: (e: any) => void
  name: string
  data: SelectOptionType[];
}

export const GenericSelect: FC<Props> = ({label, value, data, onChange, name}) => {
  const {locale} = useRouter();
  return <FormControl sx={{
    "& label": {
      right: locale === 'en' ? 'unset!important' : '35px',
      transformOrigin: locale === 'en' ? 'left!important' : 'right',
    },
    "& legend": {
      textAlign: locale === 'en' ? 'left!important' : 'right',
    }, '& div': {
      '& svg': {
        position: locale === 'en' ? 'relative' : 'initial',
      }
    }
  }} fullWidth>
    <InputLabel id="demo-simple-select-label">{label}</InputLabel>
    <Select

      name={name}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      label={label}
      onChange={onChange}
    >
      {data.map((value) => {
        return <MenuItem key={value?.label} value={value?.label}>{value.label}</MenuItem>
      })}
    </Select>
  </FormControl>

}


