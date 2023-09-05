import {motion} from 'framer-motion';
import {TitleText} from '../components/CustomText/TypingText';
import {fadeIn, planetVariants, staggerContainer} from '../utils/motion';
import {useIntl} from 'react-intl';
import {HomeSection} from '../styled/global.styled';
import {MotionContainer} from "../styled/home.styled";
import React from "react";
import {useRouter} from "next/router";
import {CustomButton} from "@lib/system-design";
import Link from 'next/link';

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
        <Div className='sm:w-1/2 flex flex-col items-center justify-center gap-9'>
          <TitleText title={`${intl.messages['homepage.about']}`} textStyles="text-center"/>
          <P
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[22px] text-[25px] text-center text-[black]"
          >
            {intl.formatMessage({id: "homepage.description"})}

          </P>
          <Link href='/about'>
            <CustomButton title={intl.formatMessage({id: "homepage.learn_more"})} btnType={'button'}
                          containerStyles='text-xl text-black rounded-full border border-[#d09225] p-2 min-w-[130px] bg-[#d09225] transition delay-150 duration-300 ease-in-out hover:border-[#faa717] hover:bg-[#faa717] hover:text-black'
            />
          </Link>
        </Div>
      </MotionContainer>
    </HomeSection>
  );
}
export default About;
