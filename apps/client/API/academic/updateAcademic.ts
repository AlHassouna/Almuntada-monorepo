import { backendInstance } from "../api";
import { useQuery } from "@tanstack/react-query";
import { IAcademic } from "./types";

const updateAcademic = async (id: number, data: IAcademic) => {
  return await backendInstance.put("/users", data, {
    params: {
      id
    }
  });
};

export const useUpdateAcademic = (id: number, data: IAcademic) => {
  return useQuery<object, Error>(["academic"], () => updateAcademic(id, data));
};
