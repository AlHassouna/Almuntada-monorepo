import { backendInstance } from "../api";
import { useQuery } from "@tanstack/react-query";
import {IEmails} from "./types";

const getEmails = async (): Promise<Array<IEmails>> => {
  return (await backendInstance.get("/academic/emails")).data;

};
export const useGetEmails = (auth?: string) => {
  return useQuery<Array<IEmails>, Error>(["emails"], getEmails);
};
