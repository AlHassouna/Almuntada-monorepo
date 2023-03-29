import { FC } from "react";
import { RevealWrapper } from "next-reveal";
import Typography from "@mui/material/Typography";
import { AcademicCardBox } from "./card.styled";
import CardMedia from "@mui/material/CardMedia";
import { Career, Subject } from "../../API/academic/types";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  degree: string;
  subject: Subject;
  career: Career;
  city: string;
}


export const AcademicsCard: FC<Props> = ({
                                           firstName,
                                           lastName,
                                           email,
                                           imageUrl,
                                           degree,
                                           subject,
                                           career,
                                           city
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
          image={imageUrl}
          title={firstName}
        />
        <Typography sx={{ textAlign: "center" }} gutterBottom variant="h5" component="div">
          {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
        </Typography>
        <Typography sx={{
          textAlign: "center"
        }
        } variant="subtitle1" color="text.secondary">
          {`${degree} ${subject.subject}`}
        </Typography>
        <Typography sx={{
          textAlign: "center"
        }
        } variant="subtitle1" color="text.secondary">
          {`${career.career}`}
        </Typography>
        <Typography
          sx={{
            textAlign: "center"
          }}
          variant="body2"
          color="text.secondary"
        >

          {`City: ${city}`} <br />
          {`Email: ${email}`}
        </Typography>
      </AcademicCardBox>
    </RevealWrapper>
  );
};
