import React, {useState} from 'react';
import {useRouter} from 'next/router';
import {MenuIcon, CloseIcon} from '@myworkspace/system-design';
import Logo from '../../assets/FinalLogo.png';
import {useIntlShared} from './navbar.consts';
import {
  NavbarContainer,
  Gradient,
  NavbarList,
  NavbarListItem,
  NavbarMenuIcon,
  LogoContainer,
  MotionContainer,
  NavbarLanguageContainer,
  NavbarLanguage,
  NavbarMenuListMobile,
  NavbarMenuListItemMobile
} from './navbar.styled';
import {navVariants} from '../../utils/motion';

function Navbar() {
  const links = useIntlShared();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {locales} = useRouter()
  return (
    <MotionContainer
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <Gradient/>
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

        <NavbarLanguageContainer>
          {
            locales?.map((locale) => (
              <NavbarLanguage key={locale} onClick={() => router.push(router.pathname, router.pathname, {locale})}>
                {locale}
              </NavbarLanguage>
            ))
          }
        </NavbarLanguageContainer>
        <NavbarMenuIcon onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon/> : <MenuIcon/>}
        </NavbarMenuIcon>
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
          {
            locales?.map((locale) => (
              <NavbarMenuListItemMobile key={locale} onClick={() => {
                router.push(router.pathname, router.pathname, {locale});
                setIsOpen(false);
              }
              }>
                {locale}
              </NavbarMenuListItemMobile>
            ))
          }
        </NavbarMenuListMobile>
      </NavbarContainer>
    </MotionContainer>

  );
}

export default Navbar;
