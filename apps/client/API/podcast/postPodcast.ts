import { podcastInstance } from '../api';
import { useQuery } from '@tanstack/react-query';

const getPodcast = async () => {
  return await podcastInstance.post('/example');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], getPodcast);
};
