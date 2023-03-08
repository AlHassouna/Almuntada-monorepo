import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {RevealWrapper} from 'next-reveal';
import Typography from '@mui/material/Typography';
import {FC} from 'react';

interface Props {
  title: string;
  description: string;
  subTitle: string;
  descriptions: Array<{ description: string; icon: string }>;
}

export const MediaCardThirdSection: FC<Props> = ({
                                                   description,
                                                   title,
                                                   subTitle,
                                                   descriptions,
                                                 }) => {
  return (
    <RevealWrapper delay={100} duration={2000} reset={true}>
      <Card
        className="card"
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
              color: 'orange',
            }}
            gutterBottom
            variant="h1"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{marginTop: '1rem', fontFamily: 'Cairo'}}
            variant="body1"
            color="text.primary"
          >
            {description}
          </Typography>
          <Typography
            sx={{marginTop: '1rem', fontFamily: 'Cairo', color: 'orange'}}
            gutterBottom
            variant="h3"
            component="div"
          >
            {subTitle}
          </Typography>
          {descriptions.map((description, index) => {
            return (
              <Typography
                sx={{marginTop: '1rem', fontFamily: 'Cairo'}}
                variant="body1"
                color="text.primary"
                key={index}
              >
                {description.description}
              </Typography>
            );
          })}
        </CardContent>
      </Card>
    </RevealWrapper>
  );
};
