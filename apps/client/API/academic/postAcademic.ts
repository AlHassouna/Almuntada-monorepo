import { backendInstance } from '../api';
import { useQuery } from '@tanstack/react-query';
import { AcademicCreated, IAcademic } from './types';

const postAcademic = async (data: AcademicCreated): Promise<IAcademic> => {
  return await backendInstance.post('/users/register', data);
};

export const usePostAcademic = (data: AcademicCreated) => {
  return useQuery<object, Error>(['academic'], () => postAcademic(data));
};
