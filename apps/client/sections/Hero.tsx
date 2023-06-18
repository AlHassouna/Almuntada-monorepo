import {MainSection, HeroGradient} from "../styled/global.styled";
import {
  Heading,
  MotionContainer,
  SubHeading,
  Text,
  Button,
  PersonImage
} from "../styled/home.styled";
import {planetVariants, staggerContainer, textVariant} from "../utils/motion";
import {useIntl} from "react-intl";
import React from "react";
import {getDirection} from "../pages/_app";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {AcademicDialog} from "../components/Dialog/AcademicDialog";
import {AcademicDialogLogic} from "../components/Dialog/dialogLogic";

const Hero = () => {
  const intl = useIntl();
  const {isOpen, onClose, onOpen, OnSubmit} = AcademicDialogLogic();
  const {div: Div} = motion
  const {locale} = useRouter();
  return (
    <MainSection>
      <HeroGradient/>
      <MotionContainer
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.65}}
      >
        <div className="flex justify-center flex-col gap-3 sm:w-1/2">
          <Heading variants={textVariant(0.5)}>
            {intl.formatMessage({id: "homepage.title"})}
          </Heading>
          <SubHeading variants={textVariant(0.8)}>
            {intl.formatMessage({id: "homepage.title_1"})}
          </SubHeading>
          <Text variants={textVariant(1)}>
            {
              intl.formatMessage({id: "homepage.subtitle"})
            }
          </Text>
          <Button variants={textVariant(1.2)} onClick={onOpen}>
            {intl.formatMessage({id: "homepage.joinus"})}
          </Button>
          <AcademicDialog
            isOpen={isOpen}
            OnSubmit={OnSubmit}
            handleClose={onClose}
          />
        </div>
        <Div
          variants={planetVariants(getDirection(locale) === 'rtl' ? 'left' : 'right')}
          className={`md:flex-1 md:flex items-center justify-center hidden`}
        >
          <PersonImage src="/hero.png" alt="Person"/>
        </Div>
      </MotionContainer>
    </MainSection>
  );
};

export default Hero;
