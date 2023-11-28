import {useIntl} from "react-intl";
import {motion} from "framer-motion";
import {Heading, MainContainer, MotionContainer} from "../styled/home.styled";
import {AboutGradient} from '../styled/global.styled';
import {fadeIn, staggerContainer, textVariant} from "../utils/motion";
import PodcastCard from "../components/Podcast/PodcastCard";
import {Skeleton} from "@mui/material";
import {useGetPodcastByStatus} from "@lib/system-design";
import Head from "next/head";
import React from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import animationData from "../assets/podcast.json";
import {getDirection} from "../pages/_app";
import {useRouter} from "next/router";

export const DescPodcast = () => {
  const intl = useIntl();
  const title = intl.formatMessage({id: 'page.home.head.title'});
  const {p: P, div: Div} = motion
  const {data, isLoading} = useGetPodcastByStatus(true);
  const {locale} = useRouter();
  const educationRef = React.useRef<LottieRefCurrentProps>(null);

  return (
    <MainContainer>
      <Head>
        <meta property='og:image'
              content='https://res.cloudinary.com/dieieuuby/image/upload/v1687169761/FinalLogo_jwfwun.png'/>
        <title>{title}</title>
      </Head>
      <AboutGradient/>
      <div className='flex h-[75vh] justify-center'>
        <MotionContainer
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0.25}}
          className='mx-auto flex justify-center items-center gap-8'
        >
          <div style={{
            width: "50%"
          }}>
            <Heading
              property={"#06143f"}
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="mt-[8px] font-normal sm:text-[42px] text-[25px] text-center text-[black]"
            >
              {
                intl.formatMessage({id: 'podcastpage.title'})
              }

            </Heading>
            <P
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className="mt-[8px] font-normal sm:text-[22px] text-[14px] text-center text-[black]"
            >
              {intl.formatMessage({id: 'podcastpage.desc'})}

            </P>
            <P
              variants={fadeIn('up', 'tween', 0.6, 1)}
              className="mt-[8px] font-normal sm:text-[22px] text-[14px] text-center text-[black]"
            >
              {intl.formatMessage({id: 'podcastpage.subdesc'})}

            </P>
          </div>
          <Div
            variants={fadeIn(getDirection(locale) === 'rtl' ? 'left' : 'right', 'tween', 0.5, 1)}
            className={`xl:flex-[1.5] flex justify-center items-center w-1/2 xl:h-screen`}
          >
            <Lottie
              style={{
                height: '100%',
              }}
              loop={true}
              lottieRef={educationRef}
              animationData={animationData}/>
          </Div>
        </MotionContainer>
      </div>
      {
        isLoading ? <Skeleton variant="rectangular" width={300} height={300}/> :
          Object.values(data).map((podcast, index) => {
            return (
              <PodcastCard
                key={index}
                podcastUrl={podcast.podcastUrl}
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                title={podcast.title}
              />
            )
          })
      }
    </MainContainer>
  )
}
