import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';

interface Props {
  description: string;
  icon: string;
  key: number;
}

export const MediaCard: FC<Props> = ({ description, icon, key }) => {
  return (
    <Card
      key={key}
      sx={{
        maxWidth: 245,
        '&.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiCard-root':
          {
            boxShadow: '0px 0px 0px 0px',
            borderRadius: '0px',
          },
      }}
    >
      <CardMedia sx={{ height: 200 }} image={icon} title="green iguana" />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
