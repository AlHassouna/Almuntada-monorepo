import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {MenuIcon, CloseIcon} from '@myworkspace/system-design';
import Logo from '../../assets/FinalLogo.png';
import {useIntlShared} from './navbar.consts';
import {
  Container,
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  NavbarMenuIcon,
  NavbarMenu,
  NavbarMenuListMobile,
  NavbarMenuListItemMobile,
  LogoContainer
} from './navbar.styled';
import {LangMenu} from './LangMenu';

function Navbar() {
  const links = useIntlShared();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Container>
      <NavbarContainer>
        <LogoContainer
          src={Logo}
          alt="logo"
          onClick={() => router.push('/')}
        />
        <NavbarList>
          {links.map(({name, id, link}) => (
            <NavbarListItem key={id} onClick={() => router.push(`${link}`)}>
              {name}
            </NavbarListItem>
          ))}
        </NavbarList>
        <NavbarMenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon/> : <MenuIcon/>}
        </NavbarMenuIcon>
      </NavbarContainer>
      <NavbarMenu>
        <LangMenu/>
      </NavbarMenu>
      <NavbarMenuListMobile isOpen={isOpen}>
        {links.map(({name, id, link}) => (
          <NavbarMenuListItemMobile
            key={id}
            onClick={() => {
              router.push(`${link}`);
              setIsOpen(false);
            }}
          >
            {name}
          </NavbarMenuListItemMobile>
        ))}
        <LangMenu/>
      </NavbarMenuListMobile>
    </Container>
  );
}

export default Navbar;
