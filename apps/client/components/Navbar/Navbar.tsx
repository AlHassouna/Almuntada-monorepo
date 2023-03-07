import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MenuIcon, CloseIcon } from '@myworkspace/system-design';
import Logo from '../../assets/AlmanshaLogo.png';
import { useIntl } from 'react-intl';

// import { links } from './navbar.consts';
import {
  Container,
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  NavbarMenuIcon,
  NavbarMenu,
  NavbarMenuListMobile,
  NavbarMenuListItemMobile,
} from './navbar.styled';
import { LangMenu } from './LangMenu';
function Navbar() {
  const intl = useIntl();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = [
    {
      id: 1,
      name: intl.formatMessage({ id: 'navbar.home' }),
      link: '/',
    },
    {
      id: 2,
      name: intl.formatMessage({ id: 'navbar.podcust' }),
      link: '/podcast',
    },
    {
      id: 3,
      name: intl.formatMessage({ id: 'navbar.services' }),
      link: '/services',
    },
    {
      id: 4,
      name: intl.formatMessage({ id: 'navbar.contact' }),
      link: '/contact',
    },
  ];
  return (
    <Container>
      <NavbarContainer>
        <Image
          src={Logo}
          alt="logo"
          className="items-center w-20 h-20 cursor-pointer"
          onClick={() => router.push('/')}
        />
        <NavbarList>
          {links.map(({ name, id, link }) => (
            <NavbarListItem key={id} onClick={() => router.push(`${link}`)}>
              {name}
            </NavbarListItem>
          ))}
        </NavbarList>
        <NavbarMenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </NavbarMenuIcon>
        <NavbarMenu>
          <LangMenu />
        </NavbarMenu>
        <NavbarMenuListMobile isOpen={isOpen}>
          {links.map(({ name, id, link }) => (
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
          <LangMenu />
        </NavbarMenuListMobile>
      </NavbarContainer>
    </Container>
  );
}

export default Navbar;
