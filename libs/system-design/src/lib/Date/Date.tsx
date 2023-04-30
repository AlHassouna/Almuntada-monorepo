import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from 'dayjs';

interface Props {
  value: Dayjs;
  name: string
  setValue: (name: string, val: string) => void;
}

export const Date: React.FC<Props> = ({value, setValue, name}) => {
  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format('YYYY-MM-DD');
      setValue(name, formattedDate);
    } else {
      setValue(name, "");
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value || null} format='YYYY-MM-DD' onChange={handleDateChange}/>
    </LocalizationProvider>
  );
}
