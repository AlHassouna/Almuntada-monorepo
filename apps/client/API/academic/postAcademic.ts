import { backendInstance } from '../api';
import { useQuery } from '@tanstack/react-query';
import { AcademicCreated, IAcademic } from './types';

const postAcademic = async (data: AcademicCreated): Promise<IAcademic> => {
  return await backendInstance.post('/users', data);
};

export const usePostAcademic = (data: AcademicCreated) => {
  return useQuery<IAcademic, Error>(['academic'], () => postAcademic(data));
};
