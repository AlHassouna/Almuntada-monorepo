import styled from 'styled-components';


export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
