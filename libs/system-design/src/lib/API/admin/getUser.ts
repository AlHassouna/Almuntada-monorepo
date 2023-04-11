import { adminInstance } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Jwt } from "jsonwebtoken";
import { environment } from "../environment/environment";
import { decode } from "jsonwebtoken";


export interface IUser {
  userName: string;
  password: string;
}

const getUser = async (params: IUser): Promise<any> => {
  const secret = decode(params.userName);

  return (await adminInstance.get("/users", {
    params
  })).data;
};

const useGetAcademic = (data: IUser) => {
  return useQuery<any, Error>(["user"], () => getUser(data));
};
