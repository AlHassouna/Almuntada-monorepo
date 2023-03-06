import React from 'react';
import {
  Container,
  FirstSection,
  FirstSectionRightSide,
  FirstSectionRightSideTitle,
  FirstSectionRightSideDescription,
  FirstSectionRightSideSubSection,
  FirstSectionRightSideSubSectionDescription,
  FirstSectionRightSideSubSectionTitle,
  FirstSectionLeftSide,
  SecondSection,
  SecondSectionLeftSideTitle,
  SecondSectionLeftSide,
  SecondSectionRightSide,
  SecondSectionLeftSideDescription,
  SecondSectionLeftSideTitle2,
} from './home.styled';
import { useIntl } from 'react-intl';
import Logo from '../../assets/AlmanshaLogo.png';
import sanadLogo from '../../assets/sanadlogo.jpeg';
import Image from 'next/image';
import { MediaCard } from '../../components/Card/Card';
export const HomePage = () => {
  const intl = useIntl();
  const cardsInformation = intl.messages[
    'homepage.ourUnique'
  ] as unknown as Array<{
    title: string;
    description: string;
  }>;

  return (
    <Container>
      <FirstSection>
        <FirstSectionRightSide>
          <FirstSectionRightSideTitle>
            {intl.formatMessage({ id: 'homepage.title' })}
          </FirstSectionRightSideTitle>
          <FirstSectionRightSideDescription>
            {intl.formatMessage({ id: 'homepage.description' })}
          </FirstSectionRightSideDescription>
          <FirstSectionRightSideSubSection>
            <FirstSectionRightSideSubSectionTitle>
              {intl.formatMessage({ id: 'homepage.ourUnique.title' })}
            </FirstSectionRightSideSubSectionTitle>
            <FirstSectionRightSideSubSectionDescription>
              {Object.keys(cardsInformation).map((key, index) => {
                return (
                  <MediaCard
                    key={index}
                    description={cardsInformation[key].description}
                    icon={cardsInformation[key].icon}
                  />
                );
              })}
            </FirstSectionRightSideSubSectionDescription>
          </FirstSectionRightSideSubSection>
        </FirstSectionRightSide>
        <FirstSectionLeftSide>
          <Image src={Logo} alt="" />
        </FirstSectionLeftSide>
      </FirstSection>
      <SecondSection>
        <SecondSectionLeftSide>
          <SecondSectionLeftSideTitle>
            {intl.formatMessage({ id: 'homepage.ourVision.title' })}
          </SecondSectionLeftSideTitle>
          <SecondSectionLeftSideTitle2>
            {intl.formatMessage({ id: 'homepage.ourVision.title2' })}
          </SecondSectionLeftSideTitle2>
          <SecondSectionLeftSideDescription>
            {intl.formatMessage({ id: 'homepage.ourVision.description' })}
          </SecondSectionLeftSideDescription>
        </SecondSectionLeftSide>
        <SecondSectionRightSide>
          <Image src={sanadLogo} width={500} height={500} alt="" />
        </SecondSectionRightSide>
      </SecondSection>
    </Container>
  );
};
