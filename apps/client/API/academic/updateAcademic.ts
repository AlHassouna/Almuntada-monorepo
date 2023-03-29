import { backendInstance } from "../api";
import { useQuery } from "@tanstack/react-query";

const updateAcademic = async (id: number) => {
  return await backendInstance.put("/users/:id");
};

export const useUpdateAcademic = (id: number) => {
  return useQuery<object, Error>(["academic"], () => updateAcademic(id));
};
