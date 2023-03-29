import { SxProps } from "@mui/material";
import { Theme } from "@emotion/react";

export interface ITable<T extends Record<string, unknown>> {
  columns: IColumns[];
  data: Array<T>;
  style?: SxProps<Theme>;
}

export interface IColumns {
  id?: string;
  header: string;
  accessor?: string | number;
  cell?: <T>(a: T) => void;
}
