import {motion} from 'framer-motion';
import {TitleText} from '../components/CustomText/TypingText';
import {staggerContainer, fadeIn, planetVariants} from '../utils/motion';
import {HeroGradient, HomeSection} from "../styled/global.styled";
import {MContainer} from '../styled/home.styled';
import {useIntl} from "react-intl";
import {getDirection} from "../pages/_app";
import {useRouter} from "next/router";
import StartSteps from '../components/StartSteps/StartSteps';

const Goals = () => {
  const intl = useIntl();
  const {div: Div, p: P} = motion
  const {locale} = useRouter();

  const goals = intl.messages[
    "homepage.goals"
    ] as unknown as Array<{
    title: string;
    desc: string;
    photo: string;
  }>;
  return (
    <HomeSection property={"#06143f"}>
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
          <TitleText title={<>{intl.messages['homepage.goals.title']}</>} textStyles={'text-center'}/>
          <div className="mt-[31px] flex flex-col w-full gap-[24px] ">
            {goals.map((feature, index) => (
              <StartSteps
                key={index}
                number={index + 1}
                text={feature.desc}
              />
            ))}
          </div>
        </Div>
        <Div
          variants={fadeIn(getDirection(locale) === 'rtl' ? 'left' : 'right', 'tween', 0.5, 1)}
          className={`flex-1 flex items-center justify-center `}
        >
          <img
            src="/goals.png"
            alt="goals"
            className="sm:w-[90%] sm:h-[90%] sm:object-contain hidden sm:block"
          />
        </Div>
      </MContainer>
    </HomeSection>
  );
}

export default Goals;
