import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {RevealWrapper} from 'next-reveal';
import Typography from '@mui/material/Typography';
import {FC} from 'react';
import {useLocale} from "@myworkspace/system-design";

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
  const locale = useLocale()
  console.log("locale: ", locale)
  return (
    <RevealWrapper delay={100} duration={2000} reset={true}>
      <Card
        className="card"
        sx={{
          maxWidth: 400,
          height: 650,
          overflow: 'scroll',
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
            sx={{marginTop: '1rem', fontFamily: 'Cairo' , textAlign: locale === 'en' ? 'left' : 'right'}}
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
                sx={{marginTop: '1rem', textAlign: locale === 'en' ? 'left' : 'right' , fontFamily: 'Cairo'}}
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
