import {staggerContainer} from '../utils/motion';
import {HomeSection} from "../styled/global.styled";
import {MContainer} from '../styled/home.styled';
import {useIntl} from "react-intl";
import {FounderCard} from '../components/Card/FounderCard'
import {TitleText} from "../components/CustomText/TypingText";

const Founders = () => {
  const intl = useIntl();
  const founders = intl.messages[
    "homepage.founders"
    ] as unknown as Array<{
    name: string;
    desc: string;
    image: string;
  }>;

  const coFounders = intl.messages[
    "homepage.cofounders"] as unknown as Array<{
    name: string;
    desc: string;
    image: string;
  }>

  return (
    <HomeSection property='fit-content'>
      <MContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto flex flex-col gap-8 '
      >
        <TitleText title={`${intl.messages['homepage.founder.title']}`} textStyles="text-center"/>
        <div
          className="flex md:flex-row gap-16 flex-col justify-center items-center mx-auto w-full"
        >

          {founders.map((founder, index) => (
            <FounderCard
              key={index}
              name={founder.name}
              image={founder.image}
              desc={founder.desc}
            />
          ))}
        </div>
        <TitleText title={`${intl.messages['homepage.cofounders.title']}`} textStyles="text-center"/>
        <div
          className="flex flex-wrap justify-center gap-8 mb-3"
        >
          {coFounders.map((coFounder, index) => (
            <FounderCard key={index} name={coFounder.name} desc={coFounder.desc} image={coFounder.image}/>
          ))}
        </div>

      </MContainer>
    </HomeSection>
  );
}

export default Founders;
