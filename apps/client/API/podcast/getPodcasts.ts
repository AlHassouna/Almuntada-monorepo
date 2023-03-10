import { backendInstance } from '../api';
import { useQuery } from '@tanstack/react-query';

const getPodcasts = async () => {
  return await backendInstance.get('/podcasts');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], getPodcasts);
};
