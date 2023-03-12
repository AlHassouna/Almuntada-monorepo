import React from 'react';
import {
  Container,
  FirstSection,
  FirstSectionLeftSide,
  FourthSection,
  FourthSectionSub,
  FourthSectionTitle,
  RightSide,
  RightSideDesc,
  RightSideSubSec,
  RightSideSubSecDesc,
  RightSideSubSecTitle,
  RightSideTitle,
  ThirdSection,
} from '../../styled/home.styled';
import { useIntl } from 'react-intl';
import Logo from '../../assets/AlmanshaLogo.png';
import Image from 'next/image';
import { MediaCard } from '../../components/Card/Card';
import { MediaCardThirdSection } from '../../components/Card/MediaCard';
import { FounderCard } from '../../components/Card/FounderCard';

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
    description: string;
    subTitle: string;
    descriptions: Array<{
      description: string;
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

  return (
    <Container>
      <FirstSection>
        <RightSide>
          <RightSideTitle>
            {intl.formatMessage({ id: 'homepage.title' })}
          </RightSideTitle>
          <RightSideDesc>
            {intl.formatMessage({ id: 'homepage.description' })}
          </RightSideDesc>
          <RightSideSubSec>
            <RightSideSubSecTitle>
              {intl.formatMessage({ id: 'homepage.ourUnique.title' })}
            </RightSideSubSecTitle>
            <RightSideSubSecDesc>
              {Object.keys(cardsInformationFirstSection).map(
                (key: string, index: number) => {
                  return (
                    <MediaCard
                      key={index}
                      description={
                        cardsInformationFirstSection[key].description
                      }
                      icon={cardsInformationFirstSection[key].icon}
                    />
                  );
                }
              )}
            </RightSideSubSecDesc>
          </RightSideSubSec>
        </RightSide>
        <FirstSectionLeftSide>
          <Image src={Logo} alt="" />
        </FirstSectionLeftSide>
      </FirstSection>
      <ThirdSection>
        {Object.keys(cardsInformationThirdSection).map(
          (key: string, index: number) => {
            return (
              <MediaCardThirdSection
                key={index}
                description={cardsInformationThirdSection[key].description}
                title={cardsInformationThirdSection[key].title}
                descriptions={
                  cardsInformationThirdSection[key].sub_descriptions
                }
                subTitle={cardsInformationThirdSection[key].sub_title}
              />
            );
          }
        )}
      </ThirdSection>
      <FourthSection>
        <FourthSectionTitle>
          {intl.formatMessage({ id: 'homepage.founders.title' })}
        </FourthSectionTitle>
        <FourthSectionSub>
          {Object.keys(cardsInforamtionFounderSection).map(
            (key: string, index: number) => {
              return (
                <FounderCard
                  key={index}
                  title={cardsInforamtionFounderSection[key]?.title}
                  name={cardsInforamtionFounderSection[key]?.name}
                  desc={cardsInforamtionFounderSection[key]?.desc}
                  image={cardsInforamtionFounderSection[key]?.image}
                />
              );
            }
          )}
        </FourthSectionSub>
      </FourthSection>
    </Container>
  );
};

export default HomePage;
