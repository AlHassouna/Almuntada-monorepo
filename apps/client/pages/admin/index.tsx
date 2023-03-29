import { FC, useMemo } from "react";
import { Box, Button } from "@mui/material";
import { AdminCard } from "../../components/AdminCard/AdminCard";
import { IColumns, Table } from "@lib/system-design";
import { useUpdateAcademic } from "../../API/academic/updateAcademic";


interface ICardInfo {
  counter: number;
  title: string;
}

const Admin: FC = () => {
  const cardInfo: Array<ICardInfo> = [
    { counter: 100435, title: "New User" },
    { counter: 1001, title: "Academics" }
  ];
  const OnDelete = (id: number) => {
    useUpdateAcademic(id);
  };

  const columns: Array<IColumns> = useMemo(
    () => [
      {
        header: "title 1",
        accessor: "title1"
      },
      {
        header: "title 2",
        accessor: "title2"
      },
      {
        header: "Action",
        cell: (a) => (
          <Box><Button variant="contained" onClick={() => OnDelete(a.id)}>Approve</Button><Button variant="contained"
                                                                                                  color={"error"}>Block</Button></Box>)
      }
    ],
    []
  );
  const fakeData = [
    {
      title1: "test1",
      title2: "test2"
    },
    {
      title2: "test2",
      title1: "test1"
    }
  ];
  return (
    <Box>
      <AdminCard data={cardInfo} />
      <Box>
        <Table style={{ margin: "50px" }} data={fakeData} columns={columns} />
      </Box>
    </Box>
  );
};
export default Admin;
