import {MainSection, AcademicGradient} from "../styled/global.styled";
import {Heading, MotionContainer, Text, Button, PersonImage} from "../styled/home.styled";
import {planetVariants, staggerContainer, textVariant} from "../utils/motion";
import {useIntl} from "react-intl";
import React from "react";
import {getDirection} from "../pages/_app";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {AcademicDialogLogic} from "../components/Dialog/dialogLogic";
import {AcademicDialog} from "../components/Dialog/AcademicDialog";

const AcademicS = () => {
  const {isOpen, onClose, onOpen, OnSubmit} = AcademicDialogLogic();
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
          <Heading variants={textVariant(0.5)}>
            {intl.formatMessage({id: "academicpage.title"})}
          </Heading>
          <Text variants={textVariant(1)}>
            {intl.formatMessage({id: "academicpage.text"})}
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

      </MotionContainer>
    </MainSection>
  );
};

export default AcademicS;
