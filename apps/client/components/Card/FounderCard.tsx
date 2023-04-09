import {FC} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {useLocale} from "@lib/system-design";

interface Props {
  name: string;
  title: string;
  desc: string;
  image: string;
}

export const FounderCard: FC<Props> = ({name, title, desc, image}) => {
  const locale = useLocale();
  return (
    <Card sx={{maxWidth: 345, textAlign: "center", height: 600}}>
      <CardMedia sx={{height: 300, filter: "grayscale(100%)"}} image={image} title={name}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h3" color="text.secondary">
          {name}
        </Typography>
        <Typography
          sx={{
            textAlign: locale === "en" ? "left" : "right"
          }}
          variant="body2"
          color="text.secondary"
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
