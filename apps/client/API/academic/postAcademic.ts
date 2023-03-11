import { backendInstance } from '../api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AcademicCreated, IAcademic } from './types';

const postAcademic = async (data: AcademicCreated): Promise<IAcademic> => {
  console.log(data);
  return await backendInstance.post('/users', data);
};

export const usePostAcademicMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: AcademicCreated) => postAcademic(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['academic'] });
    },
  });
};
