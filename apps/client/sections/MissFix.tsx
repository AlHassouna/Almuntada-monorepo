import {motion} from 'framer-motion';
import {TitleText} from '../components/CustomText/TypingText';
import {staggerContainer, fadeIn, planetVariants} from '../utils/motion';
import {HeroGradient, HomeSection} from "../styled/global.styled";
import {MContainer} from '../styled/home.styled';
import {useIntl} from "react-intl";
import {getDirection} from "../pages/_app";
import {useRouter} from "next/router";

const MissFix = () => {
  const intl = useIntl();
  const {div: Div, p: P} = motion
  const {locale} = useRouter();
  return (
    <HomeSection>
      {/*<HeroGradient/>*/}
      <MContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto flex lg:flex-row flex-col gap-8'
      >

        <Div
          variants={fadeIn(getDirection(locale) === 'rtl' ? 'right' : 'left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TitleText title={<>{intl.messages['homepage.missfix.sub.title']}</>} textStyles={'text-center'}/>
          <P
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[25px] text-[20px] text-center text-[black]"
          >
            {intl.formatMessage({id: "homepage.missfix.desc"})}

          </P>
        </Div>
        <Div
          variants={planetVariants(getDirection(locale) === 'rtl' ? 'left' : 'right')}
          className={`flex-1 flex items-center justify-center `}
        >
          <img
            src="https://www.knooznet.com/upload/11-2022/article/637cd66e272c2.JPG"
            alt="goals"
            className="w-[80%] h-[80%] object-contain"
          />
        </Div>
      </MContainer>
    </HomeSection>
  );
}

export default MissFix;
