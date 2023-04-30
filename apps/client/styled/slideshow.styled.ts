import {Button} from "@mui/material";
import styled from "styled-components";


export const SlideshowImage = styled.div`
  width: 100%;
  height: 100%;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 75vh;
  background-position: ${(props) => props.className};
  background-image: linear-gradient(rgba(0, 0, 0, 0.3),
  rgba(0, 0, 0, 0.3)), url(${(props) => props.property});
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1024px) {
    height: 70vh;
    margin-bottom: 12vh;
    background-position: center;
    background-size: contain;
  }
`;
export const SlideshowText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 80vw;

  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
`;

export const MuiButton = styled(Button)`
  color: black;
  background: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 24px;
  width: 200px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #000000;
    color: #d2cece;
    transition: all 0.2s ease-in-out;
  }
`;
