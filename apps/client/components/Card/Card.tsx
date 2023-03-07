import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { IconBtn } from './card.styled';

interface Props {
  description: string;
  icon: string;
  key: number;
}

export const MediaCard: FC<Props> = ({ description, icon, key }) => {
  return (
    <IconBtn key={key}>
      <CardMedia sx={{ height: 200 }} image={icon} title="green iguana" />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </IconBtn>
  );
};
