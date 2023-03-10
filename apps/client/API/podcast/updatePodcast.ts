import { backendInstance } from '../api';
import { useQuery } from '@tanstack/react-query';

const updatePodcast = async () => {
  return await backendInstance.put('/podcasts/:id');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], updatePodcast);
};
