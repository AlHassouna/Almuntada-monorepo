import { FC, useMemo } from "react";
import { Box, Button } from "@mui/material";
import { AdminCard } from "../../components/AdminCard/AdminCard";
import { IColumns, Table } from "@lib/system-design";
import { useUpdateAcademic } from "../../API/academic/updateAcademic";
import { AcademicUpdated } from "../../API/academic/types";
import { useGetAcademicsBySearchTerms } from "../../API/academic/searchAcademic";


interface ICardInfo {
  counter: number;
  title: string;
}

const Admin: FC = () => {
  const { mutate } = useUpdateAcademic();
  const cardInfo: Array<ICardInfo> = [
    { counter: 100435, title: "New User" },
    { counter: 1001, title: "Academics" }
  ];
  const onClick = (id: number, data: AcademicUpdated) => {
    mutate({ id, data });
  };


  const columns: Array<IColumns> = useMemo(
    () => [
      {
        header: "First Name",
        accessor: "firstName"
      },
      {
        header: "Last Name",
        accessor: "lastName"
      },
      {
        header: "Action",
        cell: (a) => (
          <Box>
            <Button variant="contained"
                    onClick={() => onClick(a as number, { isApproved: true })}>
              Approve
            </Button>
            <Button
              variant="contained"
              color={"error"} onClick={() => onClick(a as number, { isBlocked: true })}>Block</Button>
          </Box>
        )
      }
    ],
    []
  );

  return (
    <Box>
      <AdminCard data={cardInfo} />
      <Box sx={{ display: "flex" }}>

        <Table title={"New Users"} handler={useGetAcademicsBySearchTerms} columns={columns}
               style={{ margin: "10px", width: "90%" }} filterBy={{ isApproved: false }} />

        <Table title={"Blocked Users"} handler={useGetAcademicsBySearchTerms} filterBy={{ isBlocked: true }}
               columns={columns}
               style={{ margin: "10px", width: "90%" }} />
      </Box>
      {/*<Box sx={{ display: "flex" }}>*/}
      {/*  <Table title={"All Users"} handler={useGetAcademicsBySearchTerms} columns={columns}*/}
      {/*         style={{ margin: "10px", width: "90%" }} />*/}
      {/*  <Table title={"Contact Us"} handler={useGetAcademicsBySearchTerms} columns={columns}*/}
      {/*         style={{ margin: "10px", width: "90%" }} />*/}
      {/*</Box>*/}
    </Box>
  );
};
export default Admin;
