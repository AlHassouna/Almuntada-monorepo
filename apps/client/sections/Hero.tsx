import {MainSection} from "../styled/global.styled";
import {Heading, MotionContainer, SubHeading} from "../styled/home.styled";
import {staggerContainer, textVariant} from "../utils/motion";
import {useIntl} from "react-intl";
import {ImageContainerAc} from "../styled/academics.styled";
import React from "react";

const Hero = () => {
  const intl = useIntl();
  return (
    <MainSection>
      <ImageContainerAc property='/back2.png'>
        <MotionContainer
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.65}}
        >
          <div className="flex justify-center items-center flex-col gap-8">
            <Heading variants={textVariant(0.5)}>
              {intl.formatMessage({id: "homepage.title"})}
            </Heading>
            <SubHeading variants={textVariant(0.8)}>
              {intl.formatMessage({id: "homepage.title_1"})}
            </SubHeading>
            <SubHeading variants={textVariant(1.1)}>
              {intl.formatMessage({id: "homepage.title_2"})}
            </SubHeading>
          </div>
        </MotionContainer>
      </ImageContainerAc>
    </MainSection>
  );
};

export default Hero;
