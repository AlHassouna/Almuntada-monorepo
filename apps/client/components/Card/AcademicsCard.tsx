import { FC } from 'react';
import { RevealWrapper } from 'next-reveal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
      <Card sx={{ maxWidth: 345, textAlign: 'center', height: 600 }}>
        <img src={imageUrl} alt={firstName} />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {`${degree} ${subject} - ${career}`}
          </Typography>
          <Typography
            sx={{
              textAlign: 'right',
            }}
            variant="body2"
            color="text.secondary"
          >
            {`City: ${city}`}
            {`Email: ${email}`}
          </Typography>
        </CardContent>
      </Card>
    </RevealWrapper>
  );
};
