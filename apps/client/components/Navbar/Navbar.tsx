import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuIcon, CloseIcon } from "@lib/system-design";
import Logo from "../../assets/AlmanshaLogo.png";
import { useIntlShared } from "./navbar.consts";
import {
  Container,
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  NavbarMenuIcon,
  NavbarMenu,
  NavbarMenuListMobile,
  NavbarMenuListItemMobile
} from "./navbar.styled";
import { LangMenu } from "./LangMenu";

function Navbar() {
  const links = useIntlShared();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Container>
      <NavbarContainer>
        <Image
          src={Logo}
          alt="logo"
          className="items-center w-20 h-20 cursor-pointer"
          onClick={() => router.push("/")}
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
