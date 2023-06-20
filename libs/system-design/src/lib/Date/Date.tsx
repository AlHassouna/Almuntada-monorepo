import * as React from 'react';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {Dayjs} from 'dayjs';

interface Props {
  value: Dayjs;
  name: string
  setValue: (name: string, val: string) => void;
  label?: string;
  locale?: string;
}

export const Date: React.FC<Props> = ({value, setValue, name, label, locale}) => {
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
        sx={{
          "& label": {
            right: locale === 'en' ? 'unset' : '35px',
            transformOrigin: locale === 'en' ? 'left' : 'right',
          },
          "& legend": {
            textAlign: locale === 'en' ? 'left' : 'right',
          }
        }}
        value={value || null} format='YYYY-MM-DD' label={label} onChange={handleDateChange}/>
    </LocalizationProvider>
  );
}
