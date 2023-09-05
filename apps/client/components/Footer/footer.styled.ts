import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';

export const FooterContainer = styled.div`
  margin: 1rem auto;
  padding: 0 15rem;
  display: flex;
  flex-direction: row-reverse;
  height: 55vh;
  align-items: center;
  justify-content: space-between;
  background: #06143f;
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0rem;
    flex-direction: row;
  }
`;
export const FooterCopyRight = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0rem;
`;


export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;

`


export const LogoAndLinksContainer = styled.div`
  height: 50%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Facebook = styled(FacebookIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const LinkedIn = styled(LinkedInIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;

`;

export const Instagram = styled(InstagramIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

`

export const ContactUsTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
`

export const ContactUsText = styled.div`
  font-size: 1rem;
  color: white;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  align-items: center;
`


export const Phone = styled(PhoneIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
`;
export const Email = styled(EmailIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;

`;


export const Telegram = styled(TelegramIcon)`
  color: white;
  font-size: 2rem;
  cursor: pointer;

`;

export const Tiktok = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`
