import {useIntl} from "react-intl";
import {motion} from "framer-motion";
import {MainContainer, MotionContainer} from "../styled/home.styled";
import {AboutGradient} from '../styled/global.styled';
import {fadeIn, staggerContainer} from "../utils/motion";
import PodcastCard from "../components/Podcast/PodcastCard";
import {Skeleton} from "@mui/material";
import {useGetPodcastByStatus} from "@lib/system-design";
import Head from "next/head";
import React from "react";

export const DescPodcast = () => {
  const intl = useIntl();
  const title = intl.formatMessage({id: 'page.home.head.title'});
  const {p: P} = motion
  const {data, isLoading} = useGetPodcastByStatus(true);
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
          className='mx-auto flex flex-col justify-center items-center gap-8'
        >
          <P
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[black]"
          >
            {intl.formatMessage({id: 'podcastpage.desc'})}

          </P>
          <P
            variants={fadeIn('up', 'tween', 0.6, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[black]"
          >
            {intl.formatMessage({id: 'podcastpage.subdesc'})}

          </P>
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
