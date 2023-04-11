import { backendInstance } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Company } from "./types";

const getCompanies = async (): Promise<Array<Company>> => {
  return (await backendInstance.get("/academic/companies")).data;

};
export const useGetCompanies = (auth?: string) => {
  return useQuery<Array<Company>, Error>(["companies"], getCompanies);
};
