import {MainContainer, MotionContainer} from "../../styled/home.styled";
import Head from "next/head";
import React from "react";
import {useIntl} from "react-intl";
import {fadeIn, staggerContainer} from "../../utils/motion";
import {motion} from "framer-motion";
import {Skeleton} from "@mui/material";
import {useGetEvents} from "@lib/system-design";
import {EventCard} from "../../components/Card/EventCard";
import {CardContainer} from "../../styled/academics.styled";

const EventsPage = () => {
    const intl = useIntl();
    const title = intl.formatMessage({id: 'page.home.head.title'});
    const {p: P} = motion
    const {data, isLoading} = useGetEvents(true);
    return <MainContainer>
        <Head>
            <meta property='og:image'
                  content='https://res.cloudinary.com/dieieuuby/image/upload/v1687169761/FinalLogo_jwfwun.png'/>
            <title>{title}</title>
        </Head>
        <div className='flex mb-5 xl:mt-[200px] justify-center'>
            <MotionContainer
                variants={staggerContainer(0.1, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className='mx-auto flex flex-col items-center gap-8'
            >
                <P
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-[black]"
                >
                    {intl.formatMessage({id: 'eventspage.title'})}

                </P>
                <P
                    variants={fadeIn('up', 'tween', 0.6, 1)}
                    className="mt-[8px] font-normal sm:text-[28px] text-[14px] text-center text-[black]"
                >
                    {intl.formatMessage({id: 'eventspage.description'})}

                </P>
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
