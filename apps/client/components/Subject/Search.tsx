import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useGetSubjects} from "../../API/academic/getSubjects";
import {FC} from "react";

interface Props {
  label?: string
  size?: string

  onSelected: (value: string) => void
}

export const GroupedSubject: FC<Props> = ({label, size, onSelected}) => {
  const subjectList = useGetSubjects()
  if (!subjectList.data) return null
  const options = subjectList.data.map((item) => {
      const firstLetter = item.subject[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        label: item.subject,
      };
    }
  );
  return (
    <Autocomplete
      sx={{
        width: size
      }
      }
      onChange={(event, value) => onSelected(value?.label)}
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label={label}/>}
    />
  );
}



