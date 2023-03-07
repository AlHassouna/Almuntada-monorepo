import { academicInstance } from '../api';
import { useQuery } from '@tanstack/react-query';
import { IAcademic } from './types';

const getAcademic = async (): Promise<IAcademic> => {
  return await academicInstance.get('');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<IAcademic, Error>(['academic'], () => getAcademic());
};
