import { backendInstance } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AcademicCreated, IAcademic } from "./types";

const postAcademic = async (data: AcademicCreated): Promise<IAcademic> => {
  return await backendInstance.post("/academic", data);
};

export const usePostAcademicMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: AcademicCreated) => postAcademic(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["academic"] });
    }
  });
};
