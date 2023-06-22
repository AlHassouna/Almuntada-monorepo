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
      backgroundColor: '#F5F5F5',
      height: '50vh',
      width: '100%',
      justifyContent: 'space-around',
    }}
         className='flex sm:flex-row flex-col-reverse gap-5'
    >
      <iframe
        width="660"
        height="415"
        src={podcastUrl}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className='sm:w-[660px] sm:h-[355px] w-3/4 h-1/2'
      >
      </iframe>
      <span className='font-bold sm:text-[60px] text-[40px] text-[black]'>
        {title}
      </span>
    </Box>
  )
}

export default PodcastCard;
