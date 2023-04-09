import {Box} from "@mui/material";
import {FC} from "react";

interface Props {
  podcastUrl: string;
  title?: string
}

const PodcastCard: FC<Props> = ({podcastUrl, title}) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <iframe
        width="560"
        height="315"
        src={podcastUrl}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      >
      </iframe>
    </Box>
  )
}

export default PodcastCard;
