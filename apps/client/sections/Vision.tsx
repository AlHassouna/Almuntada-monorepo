import {motion} from "framer-motion";
import {TitleText} from "../components/CustomText/TypingText";
import {staggerContainer, fadeIn, planetVariants} from "../utils/motion";
import {HeroGradient, HomeSection} from "../styled/global.styled";
import {MContainer} from "../styled/home.styled";
import {useIntl} from "react-intl";
import {getDirection} from "../pages/_app";
import {useRouter} from "next/router";

const Vision = () => {
  const intl = useIntl();
  const {locale} = useRouter();
  const {div: Div} = motion;
  return (
    <HomeSection>
      <HeroGradient/>
      <MContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className="mx-auto flex lg:flex-row flex-col gap-8"
      >
        <Div
          variants={planetVariants(getDirection(locale) === "rtl" ? "right" : "left")}
          className={`flex-1 flex items-center justify-center `}
        >
          <img
            src="/socialimpact.png"
            alt="socialimpact"
            className="w-[90%] h-[90%] object-contain"
          />
        </Div>
        <Div
          variants={fadeIn(getDirection(locale) === "rtl" ? "right" : "left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TitleText title={<>{intl.messages["homepage.vision.sub.title"]}</>} textStyles={"text-center"}/>
          <div className="mt-[31px] flex flex-col w-full gap-[24px] ">
            <p className='text-[25px]'>
              {intl.formatMessage({id: "homepage.vision.desc"})}
            </p>
          </div>
          <TitleText title={<>{intl.messages["homepage.message.sub.title"]}</>} textStyles={"text-center"}/>
          <div className="mt-[31px] flex flex-col w-full gap-[24px] ">
            <p className='text-[25px] '>
              {intl.formatMessage({id: "homepage.message.desc"})}
            </p>
          </div>
        </Div>

      </MContainer>
    </HomeSection>
  );
};

export default Vision
