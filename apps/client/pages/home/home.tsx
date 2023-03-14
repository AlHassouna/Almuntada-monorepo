import React from 'react';
import {useLocale} from "@myworkspace/system-design"
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
  const locale = useLocale()
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

  const cardsInformationFounderSection = intl.messages[
    'homepage.founders'
  ] as unknown as Array<{
    title: string;
    name: string;
    desc: string;
    image: string;
  }>;

  return (
    <Container dir={locale}>
      <FirstSection>
        <RightSide>
          <RightSideTitle>
            {intl.formatMessage({ id: 'homepage.title' })}
          </RightSideTitle>
          <RightSideDesc>
            {intl.formatMessage({ id: 'homepage.description' })}
          </RightSideDesc>
          {/*<RightSideSubSec>*/}
          {/*  <RightSideSubSecTitle>*/}
          {/*    {intl.formatMessage({ id: 'homepage.ourUnique.title' })}*/}
          {/*  </RightSideSubSecTitle>*/}
          {/*  <RightSideSubSecDesc>*/}
          {/*    {Object.keys(cardsInformationFirstSection).map(*/}
          {/*      (key: string, index: number) => {*/}
          {/*        return (*/}
          {/*          <MediaCard*/}
          {/*            key={index}*/}
          {/*            description={*/}
          {/*              cardsInformationFirstSection[key].description*/}
          {/*            }*/}
          {/*            icon={cardsInformationFirstSection[key].icon}*/}
          {/*          />*/}
          {/*        );*/}
          {/*      }*/}
          {/*    )}*/}
          {/*  </RightSideSubSecDesc>*/}
          {/*</RightSideSubSec>*/}
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
          {Object.keys(cardsInformationFounderSection).map(
            (key: string, index: number) => {
              return (
                <FounderCard
                  key={index}
                  title={cardsInformationFounderSection[key]?.title}
                  name={cardsInformationFounderSection[key]?.name}
                  desc={cardsInformationFounderSection[key]?.desc}
                  image={cardsInformationFounderSection[key]?.image}
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
