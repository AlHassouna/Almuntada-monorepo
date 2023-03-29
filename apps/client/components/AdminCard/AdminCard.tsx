import { FC } from "react";
import { CardContainer, CardInfo, IconInfo } from "./AdminCard.styled";
import Typography from "@mui/material/Typography";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import { MainContainer } from "../../styled/home.styled";

interface Props {
  data: Array<{
    counter: number;
    title: string;
  }>;
}

// <Array<Props>>
export const AdminCard: FC<Props> = ({ data }) => {
  return (
    <MainContainer>
      <CardContainer>
        {data.map((item, key) => (
          <CardInfo key={key}>
            <IconInfo>
              <PeopleOutlineIcon />
              <Typography variant="h3" color="text.secondary">
                {item.counter.toLocaleString("en-US")}
              </Typography>
              <Typography variant="h6" color="text.secondary">
                {item.title}
              </Typography>
            </IconInfo>
          </CardInfo>
        ))}
      </CardContainer>
    </MainContainer>
  );
};
