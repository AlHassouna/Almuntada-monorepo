import { academicInstance } from '../api';
import { useQuery } from '@tanstack/react-query';
import { IPodcast } from '../podcast/types';

const getAcademics = async (): Promise<Array<IPodcast>> => {
  return await academicInstance.get('/example');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['academic'], () => getAcademics());
};
