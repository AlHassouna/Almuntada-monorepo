import {backendInstance} from "../api";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {VisitorCreated, IVisitor} from "./types";

export const postVisitor = async (data: VisitorCreated): Promise<IVisitor> => {
  console.log(data);
  return await backendInstance.post("/visitors", data)
};

export const UsePostVisitorMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: VisitorCreated) => postVisitor(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["visitors"]});
    }
  });
};
