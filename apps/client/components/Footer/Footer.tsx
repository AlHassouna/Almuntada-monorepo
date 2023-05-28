import {
  ContactUs, ContactUsText,
  ContactUsTitle,
  Facebook,
  FooterContainer,
  FooterCopyRight,
  Instagram,
  LinkedIn,
  LinksContainer,
  LogoAndLinksContainer,
  Email,
  Phone,
  ContactUsContainer
} from "./footer.styled";
import {LogoContainer} from "../Navbar/navbar.styled";
import Logo from "../../assets/FinalLogo.png";
import React from "react";
import {useRouter} from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <FooterContainer>
        <LogoAndLinksContainer>
          <LogoContainer
            src={Logo}
            alt="logo"
            onClick={() => router.push('/')}
          />
          <LinksContainer>
            <Facebook onClick={() => router.push('https://www.facebook.com/Almuntada.ac')}/>
            <LinkedIn onClick={() => router.push('https://www.linkedin.com/company/almuntada')}/>
            <Instagram
              onClick={() => router.push('https://www.instagram.com/almuntada_/?fbclid=IwAR1SIvAHoEaeXCxT1pDt1mzbfSL_8A7tOeBpB-GSRur81TELRu28gdgtG5I')}/>
          </LinksContainer>
        </LogoAndLinksContainer>
        <ContactUs>
          <ContactUsTitle>
            Contact Us
          </ContactUsTitle>
          <ContactUsText>
            <ContactUsContainer>
              <Phone/>
              <span>
              +962 6 535 8855
              </span>
            </ContactUsContainer>
            <ContactUsContainer>
              <Email/>
              <span>
              almuntada.ac@gmail.com
              </span>
            </ContactUsContainer>
          </ContactUsText>
        </ContactUs>
      </FooterContainer>
      <FooterCopyRight>
        Copyrights. Al-Hassouna - 2023 All rights Reserved
      </FooterCopyRight>
    </>
  )
}

export default Footer
