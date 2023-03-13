import { FC } from 'react';
import { RevealWrapper } from 'next-reveal';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { AcademicCardBox } from './card.styled';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  degree: string;
  subject: string;
  career: string;
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
  city,
}) => {
  return (
    <RevealWrapper delay={100} duration={2000} reset={true}>
      <AcademicCardBox>
        <img src={imageUrl} alt={firstName} />
        <CardContent>
          <Typography  sx={{textAlign:"center"}} gutterBottom variant="h5" component="div">
            {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
          </Typography>
          <Typography sx={{
          textAlign : "center"}
          } variant="subtitle1" color="text.secondary">
            {`${degree} ${subject}`}
          </Typography>
          <Typography sx={{
            textAlign : "center"}
          } variant="subtitle1" color="text.secondary">
            {`${career}`}
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
            }}
            variant="body2"
            color="text.secondary"
          >
            <Typography gutterBottom variant="subtitle2" component="div">
              {`City: ${city}`}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {`Email: ${email}`}
            </Typography>
          </Typography>
        </CardContent>
      </AcademicCardBox>
    </RevealWrapper>
  );
};
