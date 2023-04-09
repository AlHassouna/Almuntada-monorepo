import {motion} from 'framer-motion';
import {TitleText} from '../components/CustomText/TypingText';
import {fadeIn, staggerContainer} from '../utils/motion';
import {useIntl} from 'react-intl';
import {AboutGradient, FingerGradient, HeroGradient, HomeSection} from '../styled/global.styled';
import {MotionContainer} from "../styled/home.styled";

const About = () => {
  const intl = useIntl();
  const {p: P} = motion
  return (
    <HomeSection>
      {/*<FingerGradient/>*/}
      <MotionContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto flex flex-col justify-center items-center gap-8'
      >
        <TitleText title={`${intl.messages['homepage.about']}`} textStyles="text-center"/>

        <P
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[30px] text-center text-[black]"
        >
          {intl.formatMessage({id: "homepage.description"})}

        </P>
        <TitleText title={`${intl.messages['homepage.about_2']}`} textStyles="text-center"/>

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[30px] text-center text-[black]"
        >
          {intl.formatMessage({id: "homepage.description_2"})}

        </motion.p>
      </MotionContainer>
    </HomeSection>
  );
}
export default About;
