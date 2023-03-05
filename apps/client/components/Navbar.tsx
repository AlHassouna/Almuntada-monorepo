import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { MenuIcon, CloseIcon } from '@myworkspace/system-design';
import Logo from '../assets/AlmanshaLogo.png';
import * as Styled from './styles';
function Navbar() {
  const { locales } = useRouter();
  const router = useRouter();
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = [
    {
      id: 1,
      name: intl.formatMessage({ id: 'navbar.home' }),
      link: '/',
    },
    {
      id: 2,
      name: intl.formatMessage({ id: 'navbar.about' }),
      link: '/about',
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
    <Styled.Container>
      <Styled.NavbarContainer>
        <Image
          src={Logo}
          alt="logo"
          className="items-center w-20 h-20 cursor-pointer"
          onClick={() => router.push('/')}
        />
        <Styled.NavbarList>
          {links.map(({ name, id, link }) => (
            <Styled.NavbarListItem
              key={id}
              onClick={() => router.push(`${link}`)}
            >
              {name}
            </Styled.NavbarListItem>
          ))}
        </Styled.NavbarList>
        <Styled.NavbarMenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </Styled.NavbarMenuIcon>
        <Styled.NavbarMenu>
          <Styled.NavbarMenuList>
            {locales.map((locale) => (
              <Styled.NavbarMenuListItem
                key={locale}
                onClick={() =>
                  router.push(
                    {
                      pathname: router.pathname,
                      query: { ...router.query, locale },
                    },
                    router.asPath,
                    { locale }
                  )
                }
              >
                {locale}
              </Styled.NavbarMenuListItem>
            ))}
          </Styled.NavbarMenuList>
        </Styled.NavbarMenu>
        <Styled.NavbarMenuListMobile isOpen={isOpen}>
          {links.map(({ name, id, link }) => (
            <Styled.NavbarMenuListItemMobile
              key={id}
              onClick={() => {
                router.push(`${link}`);
                setIsOpen(false);
              }}
            >
              {name}
            </Styled.NavbarMenuListItemMobile>
          ))}

          {locales.map((locale) => (
            <Styled.NavbarMenuListItemMobile
              key={locale}
              onClick={() => {
                router.push(
                  {
                    pathname: router.pathname,
                    query: { ...router.query, locale },
                  },
                  router.asPath,
                  { locale }
                );
                setIsOpen(false);
              }}
            >
              {locale}
            </Styled.NavbarMenuListItemMobile>
          ))}
        </Styled.NavbarMenuListMobile>
      </Styled.NavbarContainer>
    </Styled.Container>
  );
}

export default Navbar;
