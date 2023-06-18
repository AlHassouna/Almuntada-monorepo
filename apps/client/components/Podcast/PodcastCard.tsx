import {Box} from "@mui/material";
import {FC} from "react";

interface Props {
  podcastUrl: string;
  title?: string,
  direction?: 'row' | 'row-reverse'
}

const PodcastCard: FC<Props> = ({podcastUrl, title, direction}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: direction,
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-around',
    }}
         className='flex sm:flex-row flex-col-reverse gap-5'
    >
      <iframe
        width="560"
        height="315"
        src={podcastUrl}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='sm:w-[560px] w-[300px] h-[315px]'
      >
      </iframe>
      <span className='font-bold text-[20px] text-[black]'>
        {title}
      </span>
    </Box>
  )
}

export default PodcastCard;
