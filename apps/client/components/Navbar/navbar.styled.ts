import styled from 'styled-components';
import Image from 'next/image';
import {motion} from 'framer-motion';

export const MotionContainer = styled(motion.div)`
  position: absolute;
  width: 100vw;
  @media (min-width: 640px) {
    padding: 2.5rem;
  }
`;

export const Gradient = styled.div`
  background-image: linear-gradient(270deg,
  hsla(43, 53%, 46%, 0.5) 0%,
  hsla(43, 69%, 61%, 0.5) 26%,
  hsla(42, 57%, 87%, 0.5) 39%,
  hsl(202deg 92% 90%) 50%,
  hsl(215deg 77% 81%) 61%,
  hsl(221deg 73% 70%) 74%,
  hsl(220, 78%, 25%) 100%);
  filter: blur(125px);
  position: absolute;
  width: 50%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;
  object-fit: contain;
  cursor: pointer;

`
export const NavbarContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.property};
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const NavbarList = styled.ul`
  display: none;
  align-items: center;
  position: relative;
  @media screen and (min-width: 1024px) {
    display: flex;
    z-index: 40;

  }
`;

export const NavbarListItem = styled.li`
  padding: 0 1rem;
  color: ${props => props.property};
  cursor: pointer;
  font-weight: 800;
  font-size: 24px;
  line-height: 30.24px;

  &:hover {
    color: #3496ae;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const NavbarMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    color: ${props => props.property};
    width: 100%;
    justify-content: flex-end;
    cursor: pointer;
    z-index: 40;
  }
`;


export const NavbarLanguageContainer = styled.nav`
  background-color: ${props => props.property};
  color: white;
  padding: 1rem 4rem;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavbarLanguage = styled.a`
  text-decoration: none;
  color: ${props => props.property};
  font-size: 16px;
  font-weight: bold;
  padding: 0 16px;

  &:hover {
    color: #3496ae;
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const NavbarToggleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarMobileList = styled(motion.ul)`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  padding: 20px;
  background-color: #ffffff;
  list-style: none;
  z-index: 10;
`;

export const NavbarMobileListItem = styled(motion.li)`
  margin-bottom: 16px;
  font-size: 18px;
  line-height: 1.5;
  color: #000000;
  cursor: pointer;
`;

export const NavbarMobileLanguage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: 16px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.5;
  color: #000000;
  cursor: pointer;
`;


export const NavbarMenuListMobile = styled.ul<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 30;
  transition: all 0.5s ease-in-out;
  transform: ${({isOpen}) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavbarMenuListItemMobile = styled.li`
  padding: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;


