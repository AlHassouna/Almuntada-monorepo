import {academicInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const postAcademic = async () => {
  return await academicInstance.post('/users');
};

export const useGetAcademic = (auth?: string) => {
  return useQuery<object, Error>(['academic'], postAcademic);
};
