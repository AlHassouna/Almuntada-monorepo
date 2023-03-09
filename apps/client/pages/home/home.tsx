import React from 'react';
import {
  Container,
  FirstSection,
  FirstSectionLeftSide,
  FooterSection,
  FourthSection,
  FourthSectionSub,
  FourthSectionTitle,
  RightSide,
  RightSideDesc,
  RightSideSubSec,
  RightSideSubSecDesc,
  RightSideSubSecTitle,
  RightSideTitle,
  SecLeftSideTitle,
  SecondSection,
  SecSecLeftSide,
  SecSecLeftSideDesc,
  SecSecLeftSideTitle2,
  SecSecRightSide,
  ThirdSection,
} from './home.styled';
import {useIntl} from 'react-intl';
import Logo from '../../assets/AlmanshaLogo.png';
import sanadLogo from '../../assets/sanadlogo.jpeg';
import Image from 'next/image';
import {MediaCard} from '../../components/Card/Card';
import {MediaCardThirdSection} from '../../components/Card/MediaCard';
import {FounderCard} from '../../components/Card/FounderCard';
// import {useGetAcademics} from "../../API/academic/getAcademics";
import {usePostAcademic} from "../../API/academic/postAcademic";
import {AcademicCreated} from "../../API/academic/types";

const HomePage = () => {
  const intl = useIntl();
  const cardsInformationFirstSection = intl.messages[
    'homepage.ourUnique'
    ] as unknown as Array<{
    title: string;
    description: string;
  }>;

  const cardsInformationThirdSection = intl.messages[
    'homepage.wwh'
    ] as unknown as Array<{
    title: string;
    descreprion: string;
    subTitle: string;
    descreptions: Array<{
      descreption: string;
      icon: string;
    }>;
  }>;

  const cardsInforamtionFounderSection = intl.messages[
    'homepage.founders'
    ] as unknown as Array<{
    title: string;
    name: string;
    desc: string;
    image: string;
  }>;


  const mockUser: AcademicCreated = {
    firstName: 'Sobhi',
    lastName: "airi",
    email: 'hzdkv@example.com',
    imageUrl: "https://media.licdn.com/dms/image/C4D03AQF1zOe2Pjku0w/profile-displayphoto-shrink_800_800/0/1662553255489?e=1683763200&v=beta&t=ImifO4UEu38bxSOaGmgk2kUktQMWSd2a0eK6LReyvbU",
    age: 25,
    city: 'Bangalore',
    subject: "asdasds",
    degree: "asdasd",
    career: "sharmatauser"
  }

  console.log("adsadasd")
  const postAcademic = usePostAcademic(mockUser)

  console.log(postAcademic)

  return (
    <Container>
      <FirstSection>
        <RightSide>
          <RightSideTitle>
            {intl.formatMessage({id: 'homepage.title'})}
          </RightSideTitle>
          <RightSideDesc>
            {intl.formatMessage({id: 'homepage.description'})}
          </RightSideDesc>
          <RightSideSubSec>
            <RightSideSubSecTitle>
              {intl.formatMessage({id: 'homepage.ourUnique.title'})}
            </RightSideSubSecTitle>
            <RightSideSubSecDesc>
              {Object.keys(cardsInformationFirstSection).map((key: string, index: number) => {
                return (
                  <MediaCard
                    key={index}
                    description={cardsInformationFirstSection[key].description}
                    icon={cardsInformationFirstSection[key].icon}
                  />
                );
              })}
            </RightSideSubSecDesc>
          </RightSideSubSec>
        </RightSide>
        <FirstSectionLeftSide>
          <Image src={Logo} alt=""/>
        </FirstSectionLeftSide>
      </FirstSection>
      <SecondSection>
        <SecSecLeftSide>
          <SecLeftSideTitle>
            {intl.formatMessage({id: 'homepage.ourVision.title'})}
          </SecLeftSideTitle>
          <SecSecLeftSideTitle2>
            {intl.formatMessage({id: 'homepage.ourVision.title2'})}
          </SecSecLeftSideTitle2>
          <SecSecLeftSideDesc>
            {intl.formatMessage({id: 'homepage.ourVision.description'})}
          </SecSecLeftSideDesc>
        </SecSecLeftSide>
        <SecSecRightSide>
          <Image src={sanadLogo} width={500} height={500} alt=""/>
        </SecSecRightSide>
      </SecondSection>
      <ThirdSection>
        {Object.keys(cardsInformationThirdSection).map((key: string, index: number) => {
          return (
            <MediaCardThirdSection
              key={index}
              description={cardsInformationThirdSection[key].descreption}
              title={cardsInformationThirdSection[key].title}
              descriptions={cardsInformationThirdSection[key].sub_descreptions}
              subTitle={cardsInformationThirdSection[key].sub_title}
            />
          );
        })}
      </ThirdSection>
      <FourthSection>
        <FourthSectionTitle>
          {intl.formatMessage({id: 'homepage.founders.title'})}
        </FourthSectionTitle>
        <FourthSectionSub>
          {Object.keys(cardsInforamtionFounderSection).map((key: string, index: number) => {
            return (
              <FounderCard
                key={index}
                title={cardsInforamtionFounderSection[key].title}
                name={cardsInforamtionFounderSection[key].name}
                desc={cardsInforamtionFounderSection[key].desc}
                image={cardsInforamtionFounderSection[key].image}
              />
            );
          })}
        </FourthSectionSub>
      </FourthSection>
      <FooterSection></FooterSection>
    </Container>
  );
};

export default HomePage;
