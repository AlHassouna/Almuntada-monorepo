import styled from 'styled-components';
import {motion} from "framer-motion";


export const MainContainer = styled.main`
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export const MainSection = styled.section`
  display: flex;
  max-width: 1280px;
  flex-direction: ${props => props.property || "column"};
  height: max-content;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 2rem;
  }
`;


export const MotionContainer = styled(motion.div)`
  width: 100%;
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
  color: white;
  text-shadow: -2px -2px 0 #172759,
    2px -2px 0 #172759,
  -2px 2px 0 #172759,
  2px 2px 0 #172759;
  @media (min-width: 640px) {
    font-size: 60px;
    line-height: 74.4px;
  }

  @media (min-width: 768px) {
    font-size: 100px;
    line-height: 114.4px;
  }

  @media (min-width: 1024px) {
    font-size: 120px;

  }
`;

export const SubHeading = styled(motion.h1)`
  text-align: center;
  font-weight: bold;
  font-size: 44px;
  line-height: 64.4px;
  color: white;
  text-shadow: -2px -2px 0 #172759,
    2px -2px 0 #172759,
  -2px 2px 0 #172759,
  2px 2px 0 #172759;
  @media (min-width: 640px) {
    font-size: 60px;
    line-height: 74.4px;
  }

  @media (min-width: 768px) {
    font-size: 70px;
    line-height: 114.4px;
  }

  @media (min-width: 1024px) {
    font-size: 80px;

  }
`;
export const Text = styled(motion.p)`
  font-size: 18px;
  line-height: 28px;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 400;
`;

