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
    }}>
      <iframe
        width="560"
        height="315"
        src={podcastUrl}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
      <span className='font-bold text-[20px] text-[black]'>
        {title}
      </span>
    </Box>
  )
}

export default PodcastCard;
