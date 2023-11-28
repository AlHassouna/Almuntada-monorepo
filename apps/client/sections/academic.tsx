import {MainSection, AcademicGradient} from "../styled/global.styled";
import {Heading, MotionContainer, Text, PersonImage} from "../styled/home.styled";
import {planetVariants, staggerContainer, textVariant} from "../utils/motion";
import {useIntl} from "react-intl";
import React from "react";
import {getDirection} from "../pages/_app";
import {motion} from "framer-motion";
import {useRouter} from "next/router";

const AcademicS = () => {
  const intl = useIntl();
  const {div: Div} = motion
  const {locale} = useRouter();
  return (
    <MainSection>
      <AcademicGradient/>
      <MotionContainer
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.65}}
      >
        <Div
          variants={planetVariants(getDirection(locale) === 'rtl' ? 'right' : 'left')}
          className={`md:flex-1 md:flex items-center justify-center hidden`}
        >
          <PersonImage src='/backaca.png' alt='Person'/>
        </Div>
        <div className="flex justify-center flex-col gap-12 sm:w-1/2">
          <Heading property={'#06143f'} variants={textVariant(0.5)}>
            {intl.formatMessage({id: "academicpage.title"})}
          </Heading>
          <Text id='30px' property={'#06143f'} variants={textVariant(1)}>
            {intl.formatMessage({id: "academicpage.text"})}
          </Text>
        </div>

      </MotionContainer>
    </MainSection>
  );
};

export default AcademicS;
