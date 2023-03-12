import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { PodcastCardBox } from './card.styled';
import { log } from 'next/dist/server/typescript/utils';

interface IProps {
  imageUrl: string;
  podcastUrl: string;
  title: string;
  description: string;
}
export const Podcast: FC<IProps> = ({ imageUrl, title, description }) => {
  return (
    <PodcastCardBox onClick={() => console.log('heeey')}>
      <img src={imageUrl} alt={title} />
      <Typography variant="h1" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="subtitle1">{description}</Typography>
    </PodcastCardBox>
  );
};
