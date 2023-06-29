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
  ContactUsContainer,
  Tiktok,
  Telegram
} from "./footer.styled";
import {LogoContainer} from "../Navbar/navbar.styled";
import Logo from "../../assets/FinalLogo.png";
import React from "react";
import {useRouter} from "next/router";
import {useIntl} from "react-intl";
import TiktokIcon from '../../public/tiktok.png'
import Image from 'next/image'

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
            <Facebook target="_blank" onClick={() => router.push('https://www.facebook.com/Almuntada.ac')}/>
            <LinkedIn target="_blank" onClick={() => router.push('https://www.linkedin.com/company/almuntada')}/>
            <Instagram target="_blank"
                       onClick={() => router.push('https://www.instagram.com/almuntada_/?fbclid=IwAR1SIvAHoEaeXCxT1pDt1mzbfSL_8A7tOeBpB-GSRur81TELRu28gdgtG5I')}/>
            <Telegram target="_blank" onClick={() => router.push('https://t.me/almuntata')}/>
            <div>
              <Image style={{
                width: '30px',
                height: '30px',
                cursor: 'pointer',
                fill: 'white'
              }} src={TiktokIcon} alt='tiktok'
                     onClick={() => router.push('https://www.tiktok.com/@almuntada.ac?_t=8d8iCV5K44g&_r=1')}/>
            </div>
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
