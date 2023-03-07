import { academicInstance } from '../api';
import { useQuery } from '@tanstack/react-query';

const getAcademic = () => {
  return academicInstance.get('/example');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['academic'], () => getAcademic());
};
