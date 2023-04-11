import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';


interface Props {
  value: Date;
  setValue: (value: Date | null) => void;
}

export const Date: React.FC<Props> = ({value, setValue}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={value} onChange={(newValue) => setValue(newValue)}/>
    </LocalizationProvider>
  );
}
