import styled from 'styled-components';
import {Box} from '@mui/material';

export const CardContainer = styled(Box)`

  display: flex;
  height: 50vh;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to left, rgba(127, 127, 138, 0.5), rgba(59, 83, 126)), url(/academic.jpeg);
  height: 85vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;
