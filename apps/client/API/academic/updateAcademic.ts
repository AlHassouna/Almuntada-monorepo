import { backendInstance } from "../api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AcademicCreated, AcademicUpdated } from "./types";

interface useMutationParams {
  id: number;
  data: AcademicUpdated;
}

const updateAcademic = async (id: number, data: AcademicUpdated) => {
  return await backendInstance.put("/users", data, {
    params: {
      id
    }
  });
};

export const useUpdateAcademic = () => {
  const queryClient = useQueryClient();
  return useMutation(({ id, data }: useMutationParams) => updateAcademic(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["academic"] });
    }
  });
};
