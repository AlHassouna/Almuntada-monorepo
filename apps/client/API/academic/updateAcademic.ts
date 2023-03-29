import { backendInstance } from "../api";
import { useQuery } from "@tanstack/react-query";
import { AcademicUpdated } from "./types";

const updateAcademic = async (id: number, data: AcademicUpdated) => {
  return await backendInstance.put("/users", data, {
    params: {
      id
    }
  });
};

export const useUpdateAcademic = (id: number, data: AcademicUpdated) => {
  return useQuery<object, Error>(["academic"], () => updateAcademic(id, data));
};
