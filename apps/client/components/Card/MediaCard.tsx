import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  subTitle: string;
  descriptions: Array<{ descreption: string; icon: string }>;
  key: number;
}

export const MediaCardThirdSection: FC<Props> = ({
  description,
  title,
  subTitle,
  descriptions,
  key,
}) => {
  return (
    <Card
      key={key}
      sx={{
        maxWidth: 345,
        textAlign: 'center',
        '&.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root':
          {
            boxShadow: '0px 0px 0px 0px',
            borderRadius: '0px',
          },
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontFamily: 'Cairo',
          }}
          gutterBottom
          variant="h1"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          sx={{ marginTop: '1rem', fontFamily: 'Cairo' }}
          variant="body1"
          color="text.primary"
        >
          {description}
        </Typography>
        <Typography
          sx={{ marginTop: '1rem', fontFamily: 'Cairo' }}
          gutterBottom
          variant="h3"
          component="div"
        >
          {subTitle}
        </Typography>
        {descriptions.map((descreption, index) => {
          console.log('desc', descreption.descreption);
          return (
            <Typography
              sx={{ marginTop: '1rem', fontFamily: 'Cairo' }}
              variant="body1"
              color="text.primary"
              key={index}
            >
              {descreption.descreption}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
};
