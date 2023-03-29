import {motion} from 'framer-motion';
import {TypingText} from '../components/CustomText/TypingText';
import {fadeIn, staggerContainer} from '../utils/motion';
import {useIntl} from 'react-intl';
import {AboutGradient, HomeSection} from '../styled/global.styled';
import {MotionContainer} from "../styled/home.styled";

const About = () => {
  const intl = useIntl();
  return (
    <HomeSection>
      <AboutGradient/>
      <MotionContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto flex flex-col justify-center items-center gap-8'
      >
        <TypingText title={`${intl.messages['homepage.about']}`} textStyles="text-center"/>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[orange]"
        >
          {intl.messages['homepage.description']}

        </motion.p>
        <TypingText title={`${intl.messages['homepage.about_2']}`} textStyles="text-center"/>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[orange]"
        >
          {intl.messages['homepage.description_2']}
        </motion.p>
      </MotionContainer>
    </HomeSection>
  );
}
export default About;
