import React from 'react';
import AboutUsBack from '../../assets/aboutus.png'
import Image from 'next/image'
import {useIntl} from "react-intl";
import {motion} from 'framer-motion';
import {TitleText} from '../../components/CustomText/TypingText';
import {useRouter} from "next/router";
import {fadeIn, planetVariants, staggerContainer} from '../../utils/motion';
import Vision from "../../sections/Vision";
import Goals from "../../sections/Goals";
import Impact from "../../sections/Impact";
import Founders from "../../sections/Founders";

const AboutUs = () => {
  const {locale} = useRouter();
  const intl = useIntl()
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='relative'>
        <Image src={AboutUsBack} alt='aboutus' style={{
          width: '100%',
          backgroundPosition: 'bottom',
        }}/>
        <div
          className='flex  flex-col justify-around absolute sm:w-[800px] sm:h-[300px] w-[85%] h-[25rem] sm:bottom-[-50px] sm:left-52 bottom-[-320px] sm:right-auto bg-[#06143f] left-0 right-0 mx-auto rounded-[8px]'>
          <TitleText title={`${intl.messages['homepage.about_2']}`} textStyles="text-center"/>
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[22px] text-[15px] text-center text-[white]"
          >
            {intl.formatMessage({id: "homepage.description_2"})}

          </motion.p>
        </div>
      </div>
      <Vision/>
      <Goals/>
      <Founders/>
    </div>
  );
};

export default AboutUs;
