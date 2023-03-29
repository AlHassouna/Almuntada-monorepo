import styled from 'styled-components';
import { Box } from '@mui/material';

export const CardContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  gap: 10%;
`;
export const CardInfo = styled(Box)`
  background-color: cornsilk;
  border-radius: 15px;
  width: 350px;
`;

export const IconInfo = styled(Box)`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
