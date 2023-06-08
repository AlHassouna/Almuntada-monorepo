import styled from "styled-components";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export const FooterContainer = styled.div`
  margin: 1rem auto;
  padding: 0 15rem;
  display: flex;
  flex-direction: row-reverse;
  height: 25vh;
  align-items: center;
  justify-content: space-between;
  background: #fcfcfc;
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0rem;
    flex-direction: row;
  }
`;
export const FooterCopyRight = styled.div`
  margin: 0 auto;
  padding: 0 15rem;
  display: flex;
  flex-direction: row-reverse;
  color: white;
  height: 10vh;
  align-items: center;
  justify-content: space-between;
  background: #315ba4;
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 0rem;
`;


export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;

`


export const LogoAndLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Facebook = styled(FacebookIcon)`
  color: #315ba4;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #315ba4;
  }
`;

export const LinkedIn = styled(LinkedInIcon)`
  color: #315ba4;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #315ba4;
  }
`;

export const Instagram = styled(InstagramIcon)`
  color: #315ba4;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #315ba4;
  }
`;

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

`

export const ContactUsTitle = styled.h3`
  font-size: 1.5rem;
  color: #315ba4;
`

export const ContactUsText = styled.div`
  font-size: 1rem;
  color: #315ba4;
`

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
  align-items: center;
`


export const Phone = styled(PhoneIcon)`
  color: #315ba4;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #315ba4;
  }
`;
export const Email = styled(EmailIcon)`
  color: #315ba4;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: #315ba4;
  }
`;
