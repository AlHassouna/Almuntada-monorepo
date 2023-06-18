import {motion} from 'framer-motion';
import {TitleText} from '../components/CustomText/TypingText';
import {fadeIn, planetVariants, staggerContainer} from '../utils/motion';
import {useIntl} from 'react-intl';
import {HomeSection} from '../styled/global.styled';
import {MotionContainer} from "../styled/home.styled";
import {getDirection} from "../pages/_app";
import React from "react";
import {useRouter} from "next/router";

const About = () => {
  const intl = useIntl();
  const {locale} = useRouter();
  const {p: P, div: Div} = motion
  return (
    <HomeSection>
      <MotionContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto sm:flex sm:flex-row flex-col justify-center items-center gap-8'
      >
        <Div
          variants={planetVariants(getDirection(locale) === 'rtl' ? 'right' : 'left')}
          className={`md:flex-1 md:flex items-center justify-center`}
        >
          <img
            src='https://yomnet.net//pics/news//2022/2/4/16439717703.jpg'
            alt="f"
            width='600px'
            className="object-contain"
          />
        </Div>
        <Div className='sm:w-1/2'>
          <TitleText title={`${intl.messages['homepage.about']}`} textStyles="text-center"/>
          <P
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[22px] text-[30px] text-center text-[black]"
          >
            {intl.formatMessage({id: "homepage.description"})}

          </P>
          <TitleText title={`${intl.messages['homepage.about_2']}`} textStyles="text-center"/>

          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[22px] text-[30px] text-center text-[black]"
          >
            {intl.formatMessage({id: "homepage.description_2"})}

          </motion.p>
        </Div>
      </MotionContainer>
    </HomeSection>
  );
}
export default About;
