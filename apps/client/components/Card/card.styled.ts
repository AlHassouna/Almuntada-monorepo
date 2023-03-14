import styled from 'styled-components';
import {Card,CardContent} from '@mui/material';

export const IconBtn = styled(Card)`
  box-shadow: none;
  border-radius: 0;
  max-width: 245px;
`;

export const AcademicCardBox = styled(Card)`
  width: 300px;
  margin: 15px;
  padding: 5px;
`;

export const PodcastCardBox = styled(Card)`
  max-width: 250px;
  max-height: 400px;
  margin: 5px;
  padding: 5px;
`;
export const HiddenContent = styled(CardContent)(({ theme }) => ({
  maxHeight: '0',
  overflow: 'hidden',
  transition: 'max-height .6s ease-out',
}));
