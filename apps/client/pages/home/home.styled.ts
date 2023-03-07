import styled from 'styled-components';

export const Container = styled.div`
  z-index: 10;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const FirstSection = styled.section`
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

export const RightSide = styled.div`
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

export const RightSideTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const RightSideDesc = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
`;

export const RightSideSubSec = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const RightSideSubSecTitle = styled.h3`
  font-size: 1.5rem;
  color: orange;

  font-weight: 700;
  text-align: center;
`;

export const RightSideSubSecDesc = styled.div`
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

export const FirstSectionLeftSide = styled.div`
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

export const SecondSection = styled.section`
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

export const SecSecLeftSide = styled.div`
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

export const SecLeftSideTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;
export const SecSecLeftSideTitle2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: orange;
`;

export const SecSecLeftSideDesc = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
`;

export const SecSecRightSide = styled.div`
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

export const ThirdSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 1024px) {
    margin-top: 5rem;
    flex-direction: column;
    justify-content: space-between;
    height: min-content;
  }
`;

export const FourthSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
`;
export const FourthSectionSub = styled.div`
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

export const FourthSectionTitle = styled.h1`
  margin-top: 1rem;
  color: orange;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const FooterSection = styled.section`
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

export const FooterSectionLeftSide = styled.div`
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

export const FooterSectionRightSide = styled.div`
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
