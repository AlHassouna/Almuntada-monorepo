import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {FC} from "react";
import styled from 'styled-components';

interface Props {
  number: string;
  title: string;
}

export const BasicCard: FC<Props> = ({number, title}) => {

  return (
    <CardWrapper>
      <CardContent className='flex flex-col items-center'>
        <Typography sx={{fontSize: 34}} color="text.secondary" gutterBottom>
          {number}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
    </CardWrapper>
  );
}


const CardWrapper = styled(Card)`
  min-width: 275px;
  min-height: 160px;
  background-color: orange;
`
