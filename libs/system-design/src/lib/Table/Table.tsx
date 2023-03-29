import {
  TableContainer,
  Table as MuTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper
} from "@mui/material";
import { ITable } from "./types";

export const Table = <T extends Record<string, unknown>>({ columns, data, style }: ITable<T>) => {
  return (
    <Paper sx={style || { width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <MuTable>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column) => (
                  <TableCell key={column.id}> {row[column.accessor as string]} </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuTable>
      </TableContainer>
      {/*<TablePagination*/}
      {/*  rowsPerPageOptions={[10, 25, 100]}*/}
      {/*  component="div"*/}
      {/*  count={rows.length}*/}
      {/*  rowsPerPage={rowsPerPage}*/}
      {/*  page={page}*/}
      {/*  onPageChange={handleChangePage}*/}
      {/*  onRowsPerPageChange={handleChangeRowsPerPage}*/}
      {/*/>*/}
    </Paper>
  );
};
