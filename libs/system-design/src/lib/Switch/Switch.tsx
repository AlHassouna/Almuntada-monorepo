import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {PodcastUpdated} from "../API";

interface Props {
  label?: string;
  id: number;
  checked: boolean;
  onChange: (id: number, data: PodcastUpdated) => void
}

export const SwitchLabels: React.FC<Props> = ({label, id, onChange, checked}) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch onChange={(e) => onChange(id, {isActive: e.target.checked})} checked={checked}/>}
        label={label}/>
    </FormGroup>
  );
}
