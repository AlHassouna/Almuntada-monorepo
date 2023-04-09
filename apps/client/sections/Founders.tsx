import {motion} from 'framer-motion';
import {staggerContainer, fadeIn} from '../utils/motion';
import {HomeSection} from "../styled/global.styled";
import {MContainer} from '../styled/home.styled';
import {useIntl} from "react-intl";
import {getDirection} from "../pages/_app";
import {useRouter} from "next/router";
import {FounderCard} from '../components/Card/FounderCard'
import {TitleText} from "../components/CustomText/TypingText";

const Founders = () => {
  const intl = useIntl();
  const {div: Div, p: P} = motion
  const {locale} = useRouter();

  const founders = intl.messages[
    "homepage.founders"
    ] as unknown as Array<{
    name: string;
    title: string;
    desc: string;
    image: string;
  }>;
  return (
    <HomeSection>
      <MContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto flex flex-col gap-8 '
      >
        <TitleText title={`${intl.messages['homepage.founder.title']}`} textStyles="text-center"/>
        <Div
          variants={fadeIn(getDirection(locale) === 'rtl' ? 'right' : 'left', 'tween', 0.2, 1)}
          className="flex md:flex-row gap-16 flex-col justify-center  items-center mx-auto w-full"
        >
          {founders.map((founder, index) => (
            <FounderCard
              key={index}
              title={founder.title}
              name={founder.name}
              image={founder.image}
              desc={founder.desc}
            />
          ))}
        </Div>
      </MContainer>
    </HomeSection>
  );
}

export default Founders;
