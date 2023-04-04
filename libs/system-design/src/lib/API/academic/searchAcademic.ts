import {IAcademic} from "./types";
import {backendInstance} from "../api";
import {useQuery} from "@tanstack/react-query";

const getAcademicsBySearchTerms = async (
  data: Record<string, unknown>
): Promise<Array<IAcademic>> => {

  return (await backendInstance.get("/users/search", {
    params: data
  })).data;
};
export const useGetAcademicsBySearchTerms = (filterBy: Record<string, unknown>) => {
  return useQuery<Array<IAcademic>, Error>(["academics", filterBy], async () =>
    await getAcademicsBySearchTerms(filterBy)
  );
};
