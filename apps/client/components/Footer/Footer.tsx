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
import {useIntl} from "react-intl";

const Footer = () => {
  const router = useRouter();
  const intl = useIntl()
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
            {
              intl.formatMessage({id: "footer.contactus"})
            }
          </ContactUsTitle>
          <ContactUsText>
            <ContactUsContainer>
              <Phone/>
              <span>
            052-9086918
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
        <div>
          Copyrights. Al-Hassouna - 2023 All rights Reserved
        </div>
        <div>
          <a target='_blank' href="/terms.pdf">
            Privacy Policy & Terms of Use
          </a>
        </div>
      </FooterCopyRight>
    </>
  )
}

export default Footer
