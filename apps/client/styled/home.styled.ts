import styled from 'styled-components';
import {motion} from "framer-motion";


export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;


export const MainSection = styled.section`
  display: flex;
  max-width: 1280px;
  flex-direction: ${props => props.property || "column"};
  height: ${props => props.className || "100vh"};
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;
export const MotionContainer = styled(motion.div)`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    width: 80%;
  }
`;
export const MContainer = styled(motion.div)`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  display: flex;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const Heading = styled(motion.h1)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 44px;
  line-height: 64.4px;

  @media (min-width: 640px) {
    font-size: 60px;
    line-height: 74.4px;
  }

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 114.4px;
  }

  @media (min-width: 1024px) {
    font-size: 144px;
    line-height: 158.4px;
  }
`;

export const SubHeading = styled.h1`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 44px;
  line-height: 64.4px;

  @media (min-width: 640px) {
    font-size: 60px;
    line-height: 74.4px;
  }

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 114.4px;
  }

  @media (min-width: 1024px) {
    font-size: 144px;
    line-height: 158.4px;
  }
`;
export const Text = styled(motion.p)`
  font-size: 18px;
  line-height: 28px;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 400;
`;

