import React from 'react';
import {useLocale} from "@myworkspace/system-design"
import {
  MainContainer,
  HomeSection,
  SectionLeftSide,
  RightSide,
  RightSideDesc,
  RightSideSubSec,
  RightSideSubSecDesc,
  RightSideSubSecTitle,
  RightSideTitle, MainSection,
} from '../../styled/home.styled';
import {useIntl} from 'react-intl';
import SectionImage from "../../assets/sec2.png"
import StatisticChart from "../../components/Chart/Chart";
import * as NextImage from "next/image";

const HomePage = () => {
  const intl = useIntl();
  const locale = useLocale()

  const vmInfotmaiom = intl.messages[
    'homepage.vm'
    ] as unknown as Array<{
    title: string;
    desc: string;
    photo: string;
  }>;


  return (
    <MainContainer dir={locale}>
      <HomeSection>
        <RightSide>
          <RightSideTitle>
            {intl.formatMessage({id: 'homepage.title'})}
          </RightSideTitle>
          <RightSideDesc>
            {intl.formatMessage({id: 'homepage.description'})}
          </RightSideDesc>
        </RightSide>
        <SectionLeftSide>
          <RightSideSubSec>
            <RightSideSubSecTitle>
              {intl.formatMessage({id: 'homepage.title_2'})}
            </RightSideSubSecTitle>
            <RightSideSubSecDesc>
              {intl.formatMessage({id: 'homepage.description_2'})}
            </RightSideSubSecDesc>
          </RightSideSubSec>
          <StatisticChart/>
        </SectionLeftSide>
      </HomeSection>
      <MainSection property="row" id="space-between">
        <RightSide property='row'>
          <RightSideSubSec>
            <RightSideTitle color="orange">
              {intl.formatMessage({id: 'homepage.impact.title'})}
            </RightSideTitle>
            <RightSideDesc color="black">
              {intl.formatMessage({id: 'homepage.impact.desc'})}
            </RightSideDesc>
          </RightSideSubSec>
          <NextImage.default
            src={SectionImage}
            alt=""
            width={300}
          />
        </RightSide>
        <SectionLeftSide>
          {
            vmInfotmaiom.map((item, index) => (
              <RightSideSubSec property="row-reverse" key={index}>
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <RightSideSubSecTitle>
                    {item.title}
                  </RightSideSubSecTitle>
                  <NextImage.default
                    src={item.photo} alt={item.title} width={200} height={200}/>
                </div>

                <RightSideSubSecDesc color="black">
                  {item.desc}
                </RightSideSubSecDesc>

              </RightSideSubSec>


            ))

          }
        </SectionLeftSide>
      </MainSection>
    </MainContainer>
  );
};

export default HomePage;
