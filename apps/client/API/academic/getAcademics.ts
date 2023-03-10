import {academicInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {IAcademic} from "./types";

const getAcademics = async (): Promise<Array<IAcademic>> => {
  return await academicInstance.get('/users');
};

const getAcademicsBySearchTerms = async (searchTerms): Promise<Array<IAcademic>> => {
  console.log("in front: ", searchTerms)
  return await academicInstance.post('/users/search', searchTerms);
}

export const useGetAcademics = (auth?: string) => {
  return useQuery<object, Error>(['academic'], getAcademics);
};

export const useGetAcademicsBySearchTerms = (searchTerms: object) => {
  return useQuery<object, Error>(['academic'], () => getAcademicsBySearchTerms(searchTerms));
}
