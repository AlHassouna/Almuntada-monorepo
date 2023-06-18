import {backendInstance} from "../api";
import {useQuery} from "@tanstack/react-query";
import {IVisitor} from "./types";

export const getVisitors = async () => {
  return (await backendInstance.get("/visitors")).data;
}

export const useGetVisitors = () => {
  return useQuery<Array<IVisitor>, Error>(["visitors"], getVisitors);

}
