import {Box} from "@mui/material";
import {FC} from "react";

interface Props{
  title: string;
  description: string;
  imageUrl: string;
  videoUrl: string;
}
export const PodcastCard:FC<Props> = ({title,description,imageUrl,videoUrl})=>{
  return (
    <Box>
      <label>{title}</label>
      <img src={imageUrl} title={title}/>
      <p>{description}</p>
    </Box>
  )
}
