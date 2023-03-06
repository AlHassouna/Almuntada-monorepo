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
} from './home.styled';
import { useIntl } from 'react-intl';
import Logo from '../../assets/AlmanshaLogo.png';
import Image from 'next/image';
import { MediaCard } from '../../components/Card/Card';
export const HomePage = () => {
  const intl = useIntl();
  const cardsInformation = intl.messages[
    'homepage.ourGoals'
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
              {intl.formatMessage({ id: 'homepage.ourGolas.title' })}
            </FirstSectionRightSideSubSectionTitle>
            <FirstSectionRightSideSubSectionDescription>
              {Object.keys(cardsInformation).map((key) => {
                return (
                  <MediaCard
                    key={key}
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
    </Container>
  );
};
