import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {FC} from 'react';
import {IconBtn} from './card.styled';

interface Props {
  description: string;
  icon: string;
}

export const MediaCard: FC<Props> = ({description, icon}) => {
  return (
    <IconBtn>
      <CardMedia sx={{height: 200}} image={icon} title="green iguana"/>
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </IconBtn>
  );
};
