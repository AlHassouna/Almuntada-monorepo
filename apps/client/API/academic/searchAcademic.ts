import { IAcademic } from './types';
import { backendInstance } from '../api';
import { useQuery } from '@tanstack/react-query';

const getAcademicsBySearchTerms = async (
  searchTerms
): Promise<Array<IAcademic>> => {
  return await backendInstance.post('/users/search', searchTerms);
};
export const useGetAcademicsBySearchTerms = (searchTerms: object) => {
  return useQuery<object, Error>(['academic'], () =>
    getAcademicsBySearchTerms(searchTerms)
  );
};
