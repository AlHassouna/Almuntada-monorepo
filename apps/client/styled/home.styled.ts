import styled from 'styled-components';

const Container = styled.div`
  z-index: 10;
  height: 100%;
  width: 100%;
  align-items: center;
`;

const FirstSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: fit-content;
    margin-top: 5rem;
  }
`;

const RightSide = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  color: black;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const RightSideTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

const RightSideDesc = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
`;

const RightSideSubSec = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const RightSideSubSecTitle = styled.h3`
  font-size: 1.5rem;
  color: orange;

  font-weight: 700;
  text-align: center;
`;

const RightSideSubSecDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FirstSectionLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const SecondSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const SecSecLeftSide = styled.div`
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

const SecLeftSideTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;
const SecSecLeftSideTitle2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: orange;
`;

const SecSecLeftSideDesc = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
`;

const SecSecRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
    height: fit-content;
    margin-top: 5rem;
    display: none;
  }
`;

const ThirdSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;

  @media screen and (max-width: 1024px) {
    margin-top: 5rem;
    flex-direction: column;
    justify-content: space-between;
    height: min-content;
  }
`;

const FourthSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
const FourthSectionSub = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    margin-top: 5rem;
    flex-direction: column;
    justify-content: space-between;
    height: min-content;
  }
`;

const FourthSectionTitle = styled.h1`
  margin-top: 1rem;
  color: orange;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

const FooterSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50%;
  background-color: orange;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    height: min-content;
  }
`;

const FooterSectionLeftSide = styled.div`
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

const FooterSectionRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export {
  Container,
  FirstSection,
  RightSide,
  FirstSectionLeftSide,
  RightSideTitle,
  RightSideDesc,
  RightSideSubSec,
  RightSideSubSecTitle,
  RightSideSubSecDesc,
  SecondSection,
  SecSecLeftSide,
  SecLeftSideTitle,
  SecSecLeftSideTitle2,
  SecSecLeftSideDesc,
  SecSecRightSide,
  ThirdSection,
  FourthSection,
  FourthSectionSub,
  FourthSectionTitle,
  FooterSection,
  FooterSectionLeftSide,
  FooterSectionRightSide,
}
