import styled from 'styled-components';


const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  font-family: 'Tajawal', sans-serif;
`;


const MainSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.property || "column"};
  justify-content: ${props => props.id || "center"};
  padding: 0 5%;
  height: ${props => props.className || "100vh"};
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
const HomeSection = styled.section`
  display: flex;
  background-image: linear-gradient(to right,
  rgb(28, 41, 64),
  rgba(0, 0, 0, 0.5)), url("https://live.staticflickr.com/65535/51890502128_91f015e8bb_k.jpg");
  -webkit-background-size: cover;
  background-size: cover;
  justify-content: space-between;
  padding: 0 5%;
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: ${props => props.property || "column"};
  align-items: center;
  justify-content: center;
  padding: 0 5%;
  width: ${props => props.id || "60%"};
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    width: 100%;
    flex-direction: column;
  }
`;

const RightSideTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.color || 'white'};
  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    width: 100%;
    font-size: 2rem;
  }
`;

const RightSideDesc = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${props => props.color || 'white'};
  margin: 10% 0;

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
    width: 100%;
    font-size: 1rem;
  }
`;

export const Statistic = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const RightSideSubSec = styled.section`
  display: flex;
  flex-direction: ${props => props.property || "column"};
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RightSideSubSecTitle = styled.h3`
  font-size: 2.5rem;
  color: ${props => props.color || 'orange'};
  font-weight: 700;
  text-align: center;
`;

const RightSideSubSecDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${props => props.color || 'white'};
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SectionLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;


export {
  HomeSection,
  RightSide,
  SectionLeftSide,
  RightSideTitle,
  RightSideDesc,
  RightSideSubSec,
  RightSideSubSecTitle,
  RightSideSubSecDesc,
  MainContainer,
  MainSection
}
