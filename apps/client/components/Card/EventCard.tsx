import {FC} from "react";
import {RevealWrapper} from "next-reveal";
import Typography from "@mui/material/Typography";
import {AcademicCardBox} from "./card.styled";
import CardMedia from "@mui/material/CardMedia";

interface Props {
    name: string;
    information: string;
    location: string;
    organizer: string;
    dateOfEvent: string;
    image: string;
}


export const EventCard: FC<Props> = ({
                                         name,
                                         information,
                                         location,
                                         organizer,
                                         dateOfEvent,
                                         image
                                     }) => {

    return (
        <RevealWrapper delay={100} duration={2000} reset={true}>
            <AcademicCardBox>
                <CardMedia
                    sx={{
                        height: 300,
                        filter: "grayscale(100%)",
                        "&:hover": {
                            transition: "all 0.5s ease",
                            filter: "grayscale(0%)"
                        }
                    }}
                    image={image}
                    title={name}
                />
                <Typography sx={{textAlign: "center"}} gutterBottom variant="h5" component="div">
                    {`${name}`}
                </Typography>
                <Typography sx={{
                    textAlign: "center"
                }
                } variant="subtitle1" color="text.secondary">
                    {` ${information}`}
                </Typography>
                <Typography sx={{
                    textAlign: "center"
                }
                } variant="subtitle1" color="text.secondary">
                    {`${location}`}
                </Typography>
                <Typography
                    sx={{
                        textAlign: "center"
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                </Typography>
            </AcademicCardBox>
        </RevealWrapper>
    );
};
