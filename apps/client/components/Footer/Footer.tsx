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
  Telegram
} from "./footer.styled";
import {LogoContainer} from "../Navbar/navbar.styled";
import Logo from "../../assets/FinalLogo2.png";
import React from "react";
import {useRouter} from "next/router";
import {useIntl} from "react-intl";
import TiktokIcon from '../../public/tiktok.png'
import Image from 'next/image'
import {SocialIcon} from "react-social-icons";

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
          <LinksContainer>
            <SocialIcon target="_blank" url="https://www.facebook.com/Almuntada.ac" fgColor={'white'}
                        bgColor={'transparent'}/>
            <SocialIcon target="_blank" url="https://www.linkedin.com/company/almuntada" fgColor={'white'}
                        bgColor={'transparent'}/>
            <SocialIcon target="_blank"
                        url="https://www.instagram.com/almuntada_/?fbclid=IwAR1SIvAHoEaeXCxT1pDt1mzbfSL_8A7tOeBpB-GSRur81TELRu28gdgtG5I"
                        fgColor={'white'}
                        bgColor={'transparent'}/>
            <SocialIcon target="_blank" url="https://t.me/almuntata" fgColor={'white'}
                        bgColor={'transparent'}/>
            <SocialIcon target="_blank" url="https://www.tiktok.com/@almuntada.ac?_t=8d8iCV5K44g&_r=1" fgColor={'white'}
                        bgColor={'#06143f'}/>
          </LinksContainer>
          <FooterCopyRight>
            <div className='text-center'>
              Copyrights. Al-Hassouna - 2023 All rights Reserved
            </div>
            <div className='hover:text-[#3496ae]'>
              <a target='_blank' href="/terms.pdf">
                Privacy Policy & Terms of Use
              </a>
            </div>
          </FooterCopyRight>
        </ContactUs>
      </FooterContainer>
    </>
  )
}

export default Footer
