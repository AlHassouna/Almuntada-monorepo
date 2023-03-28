import {motion} from 'framer-motion';
import {TitleText, TypingText} from '../components/CustomText/TypingText';
import {staggerContainer, fadeIn, planetVariants} from '../utils/motion';
import {HeroGradient, HomeSection} from "../styled/global.styled";
import {MContainer} from '../styled/home.styled';
import {useIntl} from "react-intl";
import StartSteps from '../components/StartSteps/StartSteps';
import {getDirection} from "../pages/_app";
import {useRouter} from "next/router";

const Goals = () => {
  const intl = useIntl();
  const {locale} = useRouter();
  const vmInfotmaiom = intl.messages[
    'homepage.vm'
    ] as unknown as Array<{
    title: string;
    desc: string;
    photo: string;
  }>;
  return (
    <HomeSection>
      <HeroGradient/>
      <MContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto flex lg:flex-row flex-col gap-8'
      >
        <motion.div
          variants={planetVariants(getDirection(locale) === 'rtl' ? 'right' : 'left')}
          className={`flex-1 flex items-center justify-center `}
        >
          <img
            src="/socialimpact.png"
            alt="socialimpact"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn(getDirection(locale) === 'rtl' ? 'right' : 'left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={intl.messages['homepage.vm.title']} textStyles={'text-center'}/>
          <TitleText title={<>{intl.messages['homepage.vm.sub.title']}</>} textStyles={'text-center'}/>
          <div className="mt-[31px] flex flex-col w-full gap-[24px] ">
            {vmInfotmaiom.map((feature, index) => (
              <StartSteps
                key={index}
                number={index + 1}
                text={feature.desc}
              />
            ))}
          </div>
        </motion.div>
      </MContainer>
    </HomeSection>
  );
}

export default Goals;
