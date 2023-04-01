import {SxProps} from "@mui/material";
import {Theme} from "@emotion/react";

import {UseQueryResult} from "@tanstack/react-query";

export interface ITable<T extends Record<string, unknown>> {
  title: string;
  // handler: (a: Record<string, unknown>) => UseQueryResult<T[], Error>;
  handler: (a: any) => any;
  filterBy: Record<string, unknown>;
  columns: IColumns[];
  style?: SxProps<Theme>;
}

export interface IColumns {
  id?: number;
  header: string;
  accessor?: string | number;
  cell?: (a: number) => any;
}
