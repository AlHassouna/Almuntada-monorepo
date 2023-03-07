import { academicInstance } from '../api';
import { useQuery } from '@tanstack/react-query';

const getAcademic = async () => {
  return await academicInstance.post('/example');
};

export const useGetAcademic = (auth?: string) => {
  return useQuery<object, Error>(['academic'], getAcademic);
};
