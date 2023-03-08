import {academicInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const updateAcademic = async () => {
  return await academicInstance.put('/users/:id');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['academic'], updateAcademic);
};
