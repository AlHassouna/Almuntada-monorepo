import React, {useState} from "react";
import {useRouter} from "next/router";
import {MenuIcon, CloseIcon, CustomButton} from "@lib/system-design";
import Logo from '../../assets/FinalLogo2.png';
import {useIntlShared} from "./navbar.consts";
import {
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  NavbarMenuIcon,
  LogoContainer,
  NavbarMenuListMobile,
  NavbarMenuListItemMobile,
} from './navbar.styled';
import {TemporaryDrawer} from "@lib/system-design";

function Navbar() {
  const links = useIntlShared();
  const router = useRouter();
  const pathname = router.pathname;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {locales} = useRouter()
  return (
    <header className='w-full sm:fixed z-10'>
      <NavbarContainer property={pathname === '/' ? '#06143f' : 'white'}>
        <LogoContainer
          src={Logo}
          alt="logo"
          onClick={() => router.push('/')}
        />
        <NavbarList>
          {links.map(({name, id, link}) => (
            id === 5 ?
              pathname === '/' ?
                <CustomButton handleClick={() => router.push('/joinus')} btnType={"button"}
                              containerStyles='text-xl text-white rounded-full border border-[white] p-2 min-w-[130px] transition delay-150 duration-300 ease-in-out  hover:border-[#d09225] hover:bg-[#d09225] hover:text-black'
                              key={id} title={name}/> :
                <CustomButton handleClick={
                  () => router.push('/joinus')
                } title={name} btnType={'button'}
                              containerStyles='text-xl text-black rounded-full border border-[black] p-2 min-w-[130px] transition delay-150 duration-300 ease-in-out  hover:border-[#d09225] hover:bg-[#d09225] hover:text-black'
                              key={id}/> :
              <NavbarListItem property={pathname === '/' ? 'white' : '#06143f'} key={id}
                              onClick={() => router.push(`${link}`)}>
                {name}
              </NavbarListItem>
          ))}
          <TemporaryDrawer/>

        </NavbarList>
        <NavbarMenuIcon property={pathname === '/' ? 'white' : '#06143f'} onClick={() => setIsOpen(!isOpen)}>
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
          <div className='flex absolute top-10'>
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
          </div>
        </NavbarMenuListMobile>
      </NavbarContainer>
    </header>

  );
}

export default Navbar;
