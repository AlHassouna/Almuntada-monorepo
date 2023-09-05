import styled from 'styled-components';
import {Box} from '@mui/material';

export const CardContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;
export const AcademicSection = styled.section`
  display: flex;
  flex-direction: ${props => props.property || "column"};
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 1rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 1rem 1rem;
  }
`;
export const FieldContainer = styled.div`
  /* For larger screens, the field container takes half of the row (1fr) */
  grid-column: span 2;
`;
