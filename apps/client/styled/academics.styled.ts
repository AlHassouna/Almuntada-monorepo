import styled from 'styled-components';
import {Box} from '@mui/material';

export const CardContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 50vh;
`;
export const AcademicSection = styled.section`
  display: flex;
  flex-direction: ${props => props.property || "column"};
  height: 100vh;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
export const ImageContainerAc = styled.div`
  display: flex;
  align-items: center;
  background: url(${props => props.property});
  height: 65vh;
  z-index: 2;
  width: 100%;
  background-color: black;
  background-blend-mode: luminosity;
  object-fit: contain;
  animation: moveBackground 20s linear infinite;
  @keyframes moveBackground {
    from {
      background-position: center;
    }
    to {
      background-position: 1000px 0;
    }
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
`;
