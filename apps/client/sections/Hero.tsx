import {motion} from "framer-motion";
import {MainSection} from "../styled/global.styled";
import {Heading, MotionContainer, SubHeading} from "../styled/home.styled";
import {staggerContainer, textVariant} from "../utils/motion";
import {useIntl} from "react-intl";

const Hero = () => {
  const intl = useIntl();
  const {div: Div} = motion;
  return (
    <MainSection>
      <MotionContainer
        variants={staggerContainer(0.1, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.65}}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <Heading variants={textVariant(1.1)}>
            {intl.formatMessage({id: "homepage.title"})}
          </Heading>
          <Div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <SubHeading>
              {intl.formatMessage({id: "homepage.title_1"})}
            </SubHeading>
          </Div>
        </div>
      </MotionContainer>
    </MainSection>
  );
};

export default Hero;
