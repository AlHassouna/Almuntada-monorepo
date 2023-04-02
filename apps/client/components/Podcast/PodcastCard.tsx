import {Box} from "@mui/material";
import {FC} from "react";

interface Props {
  title: string;
  podcastUrl: string;
}

const PodcastCard: FC<Props> = ({title, podcastUrl}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <label>{title}</label>
      <iframe
        width="560"
        height="315"
        src={podcastUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </Box>
  )
}

export default PodcastCard;
