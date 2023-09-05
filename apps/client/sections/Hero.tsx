import {MainSection} from "../styled/global.styled";
import {
    MotionContainer,
    Text,
} from "../styled/home.styled";
import {staggerContainer, textVariant, fadeIn} from "../utils/motion";
import {useIntl} from "react-intl";
import React from "react";
import {getDirection} from "../pages/_app";
import {motion} from "framer-motion";
import {useRouter} from "next/router";
import {AcademicDialog} from "../components/Dialog/AcademicDialog";
import {AcademicDialogLogic} from "../components/Dialog/dialogLogic";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "../assets/animation_ljyg4ikb.json";

const Hero = () => {
    const intl = useIntl();
    const desc = intl.formatMessage({id: "homepage.subtitle"});
    const {div: Div} = motion
    const {locale} = useRouter();
    const educationRef = React.useRef<LottieRefCurrentProps>(null);
    return (
        <MainSection property={"#06143f"}>
            <MotionContainer
                variants={staggerContainer(0.1, 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.65}}
            >
                <div className="flex justify-center flex-col gap-7 sm:w-1/2">
                    <Text about={locale === 'en' ? '30px' : ''} id={locale === 'en' ? '50px' : ''}
                          variants={textVariant(1)}>
                        {
                            desc.split(' ').map((item, index) => (
                                item === 'عربية' || item === 'ערבית' || item === 'Arab' ?
                                    <span key={index} className="text-[#3496ae]">{item} </span> : item + ' '
                            ))
                        }
                    </Text>
                </div>
                <Div
                    variants={fadeIn(getDirection(locale) === 'rtl' ? 'left' : 'right', 'tween', 0.5, 1)}
                    className={`xl:flex-[1.5] flex justify-center items-center w-full xl:h-screen`}
                >
                    {/*<PersonImage src="/newhero.png" alt="Person"/>*/}
                    <Lottie
                        style={{
                            width: '85%',
                            height: '100%',
                            maxWidth: '600px',
                        }}
                        loop={true}
                        lottieRef={educationRef}
                        animationData={animationData}/>
                </Div>
            </MotionContainer>
        </MainSection>
    );
};

export default Hero;
