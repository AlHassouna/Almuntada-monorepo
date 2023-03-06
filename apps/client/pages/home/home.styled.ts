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

export const FirstSectionRightSide = styled.div`
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

export const FirstSectionRightSideTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;

export const FirstSectionRightSideDescription = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
`;

export const FirstSectionRightSideSubSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FirstSectionRightSideSubSectionTitle = styled.h3`
  font-size: 1.5rem;
  color: orange;

  font-weight: 700;
  text-align: center;
`;

export const FirstSectionRightSideSubSectionDescription = styled.div`
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

export const SecondSectionLeftSide = styled.div`
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

export const SecondSectionLeftSideTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
`;
export const SecondSectionLeftSideTitle2 = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  color: orange;
`;

export const SecondSectionLeftSideDescription = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
`;

export const SecondSectionRightSide = styled.div`
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
