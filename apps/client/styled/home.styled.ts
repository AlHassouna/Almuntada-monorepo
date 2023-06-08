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
  color: #172759;
  font-size: 90px;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    text-align: center;
    line-height: 74.4px;
  }
`;

export const SubHeading = styled(motion.h1)`
  font-weight: bold;
  text-transform: uppercase;
  color: #172759;
  font-size: 60px;
  @media screen and (max-width: 1024px) {
    text-align: center;
    font-size: 40px;
    line-height: 74.4px;
  }
`;
export const Text = styled(motion.p)`
  font-size: 28px;
  color: #172759;
  margin: 0;
  margin-bottom: 1rem;
  font-weight: 400;
  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 488px;
  height: 488px;
  overflow: hidden;
`;

export const BorderRadius = styled.div`
  background: #172759;
  width: 488px;
  height: 488px;
  animation-name: borderRadius;
  animation-duration: 10s;
  animation-iteration-count: infinite;

  @keyframes borderRadius {
    0% {
      border-radius: 52% 48% 51% 49% / 32% 45% 55% 68%;
    }
    100% {
      border-radius: 74% 26% 65% 35% / 42% 57% 43% 58%;
    }
  }
`;
export const PersonImage = styled.img`
  height: 100%;
`;
export const Button = styled(motion.button)`
  background: #172759;
  color: white;
  border-radius: 14px;
  width: 200px;
  height: 60px;
  padding: .7rem;
  cursor: pointer;
  font-weight: 800;
  font-size: 24px;
  line-height: 30.24px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    background: #e1e1e1;
    color: #172759;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }
`
