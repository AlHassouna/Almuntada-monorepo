import styled from 'styled-components';
export const Container = styled.div`
  display: fixed;
  z-index: 10;
  width: 100%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 4rem;
  height: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavbarListItem = styled.li`
  padding: 0 1rem;
  cursor: pointer;
  color: #000;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const NavbarMenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    cursor: pointer;
    z-index: 40;
    color: #ccc;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavbarMenuList = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const NavbarMenuListItem = styled.li`
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
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
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavbarMenuListItemMobile = styled.li`
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
