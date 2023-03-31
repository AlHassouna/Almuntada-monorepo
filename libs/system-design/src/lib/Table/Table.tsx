import {
  TableContainer,
  Table as MuTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper, Typography
} from "@mui/material";
import {IColumns, ITable} from "./types";

export const Table = <T extends Record<string, unknown>>({
                                                           columns,
                                                           handler,
                                                           filterBy,
                                                           style,
                                                           title

                                                         }: ITable<T>) => {
  const {data, isError, isLoading} = handler(filterBy);
  console.log(data);
  return (
    <Paper sx={style || {width: "100%", overflow: "hidden"}}>
      <Typography variant="h4">{title}</Typography>
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
          (<TableBody>
          {
            data?.map((row: any, index: any) => (
              <TableRow key={index}>
                {columns?.map((column) => (
                  <TableCell
                    key={column?.id}> {row[column?.accessor as string] || column?.cell?.(row?.id as number)}  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>)

        </MuTable>
      </TableContainer>
      {/* TODO: need to support the Pagination from the backend side*/}
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
