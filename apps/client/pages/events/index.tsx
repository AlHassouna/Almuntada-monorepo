import {Heading, MainContainer, MotionContainer} from "../../styled/home.styled";
import Head from "next/head";
import React from "react";
import {useIntl} from "react-intl";
import {fadeIn, staggerContainer} from "../../utils/motion";
import {motion} from "framer-motion";
import {Skeleton} from "@mui/material";
import {useGetEvents} from "@lib/system-design";
import {EventCard} from "../../components/Card/EventCard";
import {CardContainer} from "../../styled/academics.styled";
import {getDirection} from "../_app";
import {useRouter} from "next/router";
import Lecture from '../../assets/lecture.jpg'
import Image from 'next/image'

const EventsPage = () => {
  const intl = useIntl();
  const title = intl.formatMessage({id: 'page.home.head.title'});
  const {p: P, div: Div} = motion
  const {locale} = useRouter();
  const {data, isLoading} = useGetEvents(true);
  return <MainContainer>
    <Head>
      <meta property='og:image'
            content='https://res.cloudinary.com/dieieuuby/image/upload/v1687169761/FinalLogo_jwfwun.png'/>
      <title>{title}</title>
    </Head>
    <div className='flex h-[75vh] justify-center'>
      <MotionContainer
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className='mx-auto flex  justify-center items-center gap-8'
      >
        <div style={{
          width: "50%"
        }}>
          <Heading
            property={"#06143f"}
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[black]"
          >
            {intl.formatMessage({id: 'eventspage.title'})}

          </Heading>
          <P
            variants={fadeIn('up', 'tween', 0.6, 1)}
            className="mt-[8px] font-normal sm:text-[25px] text-[14px] text-center text-[black]"
          >
            {intl.formatMessage({id: 'eventspage.description'})}

          </P>
        </div>
        <Div
          variants={fadeIn(getDirection(locale) === 'rtl' ? 'left' : 'right', 'tween', 0.5, 1)}
          className={`xl:flex-[1.5] flex justify-center items-center w-1/2 xl:h-screen`}
        >
          <Image src={Lecture} alt="Picture of the author" width={400} height={400}/>
        </Div>
      </MotionContainer>
    </div>
    <CardContainer
    >
      {
        isLoading ? <Skeleton variant="rectangular" width={300} height={300}/> :
          Object.values(data).map((event, index) => {
            return (
              <EventCard
                key={index}
                name={event.name}
                information={event.information}
                dateOfEvent={event.dateOfEvent}
                image={event.image}
                location={event.location}
                organizer={event.organizer}
              />
            )
          })
      }
    </CardContainer>

  </MainContainer>
}


export default EventsPage
