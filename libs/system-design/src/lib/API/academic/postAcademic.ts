import {backendInstance} from "../api";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {AcademicCreated, IAcademic} from "./types";

export const postAcademic = async (data: AcademicCreated): Promise<IAcademic> => {
  return await backendInstance.post("/academic", data)
};

export const usePostAcademicMutation = () => {
  // TODO: you need to fix this function by adding type for thr return value
  const queryClient = useQueryClient();
  return useMutation((data: AcademicCreated) => postAcademic(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["academic"]});
    }
  });
};
