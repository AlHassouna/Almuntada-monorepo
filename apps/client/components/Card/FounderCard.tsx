import {FC} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {useLocale} from "@lib/system-design";

interface Props {
  name: string;
  desc: string;
  image: string;
}

export const FounderCard: FC<Props> = ({name, desc, image}) => {
  const locale = useLocale();
  return (
    <Card sx={{width: 300, textAlign: "center", height: 470}}>
      <CardMedia sx={{height: 300, filter: "grayscale(100%)"}} image={image} title={name}/>
      <CardContent>
        <Typography variant="h3" color="black">
          {name}
        </Typography>
        <Typography
          sx={{
            textAlign: locale === "en" ? "left" : "right"
          }}
          variant="body2"
          color="gray"
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
