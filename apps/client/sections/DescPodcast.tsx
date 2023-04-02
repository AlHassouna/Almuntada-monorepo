import {useIntl} from "react-intl";
import {motion} from "framer-motion";
import {MotionContainer} from "../styled/home.styled";
import {AboutGradient, HomeSection} from '../styled/global.styled';
import {fadeIn, staggerContainer} from "../utils/motion";
import {Pimages} from '../components/Pimages/Pimages'

export const DescPodcast = () => {
  const intl = useIntl();
  const {p: P} = motion


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
        <P
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[black]"
        >
          {intl.messages['podcastpage.desc']}

        </P>
        <P
          variants={fadeIn('up', 'tween', 0.6, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[black]"
        >
          {intl.messages['podcastpage.subdesc']}

        </P>
      </MotionContainer>
      {/*<Pimages/>*/}
    </HomeSection>
  )
}
