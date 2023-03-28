import {IAcademic, SearchData} from './types';
import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const getAcademicsBySearchTerms = async (
  data: SearchData
): Promise<Array<IAcademic>> => {
  return (await backendInstance.get('/users/search', {
    params: data
  })).data;
};
export const useGetAcademicsBySearchTerms = (data) => {
  return useQuery<Array<IAcademic>, Error>(['academic'], () =>
    getAcademicsBySearchTerms(data)
  );
};
