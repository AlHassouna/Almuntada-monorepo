import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  flex-direction: ${props => props.property || "column"};
  height: 85vh;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

export const HomeSection = styled.section`
  height: 100vh;
  z-index: 10;
  position: relative;
  margin-top: 2rem;
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroGradient = styled.div`
  background: linear-gradient(97.86deg,
  rgba(180, 144, 55, 0.5) 0%,
  rgba(224, 185, 89, 0.5) 53.65%,
  rgba(224, 185, 89, 0.5) 100%);
  filter: blur(190px);
  width: 200px;
  height: 438px;
  left: 0;
  position: absolute;

`;

export const AboutGradient = styled.div`
  z-index: 0;
  position: absolute;
  width: 200px;
  height: 438px;
  top: 0px;
  right: 0px;

  background: #7aebfb;
  filter: blur(390px);
`;
