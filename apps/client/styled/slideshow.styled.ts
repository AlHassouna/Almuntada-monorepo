import {Button} from "@mui/material";
import styled from "styled-components";

export const SlideshowContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;
`;

export const SlideshowImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 60vh;
  background-position: center;
  background-image: linear-gradient(to right,
  rgb(44, 73, 122),
  rgba(180, 144, 55, 0.5)), url(${(props) => props.property});
  -webkit-background-size: cover;

`;
export const SlideshowText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
  }
`;

export const MuiButton = styled(Button)`
  color: black;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 24px;
  width: 200px;

  &:hover {
    background: #f5f5f5;
    color: black;
  }
`;
