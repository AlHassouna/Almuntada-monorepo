import styled from 'styled-components';

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
export const CardsSection = styled.section`
  display: flex;
  flex-direction: ${props => props.property || "column"};
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
    height: max-content;
  }
`;
export const HomeSection = styled.section`
  display: flex;
  background: ${props => props.property || "white"};
  justify-content: center;
  z-index: 10;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    height: max-content;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroGradient = styled.div`
  background: linear-gradient(97.86deg,
  rgb(84, 127, 204) 0%,
  rgb(36, 57, 91) 53.65%,
  rgb(84, 127, 204) 100%);
  filter: blur(250px);
  width: 500px;
  height: 338px;
  top: 35%;
  right: 40%;
  position: absolute;
`;
export const AcademicGradient = styled.div`
  background: linear-gradient(97.86deg,
  rgba(224, 185, 89, 0.5) 0%,
  rgba(234, 203, 126, 0.5) 53.65%,
  rgba(255, 176, 0, 0.5) 100%);
  filter: blur(250px);
  width: 500px;
  height: 338px;
  top: 35%;
  right: 40%;
  position: absolute;
`;

export const AboutGradient = styled.div`
  position: absolute;
  width: 200px;
  height: 438px;
  top: 0px;
  right: 0px;

  background: #7aebfb;
  filter: blur(390px);
`;
