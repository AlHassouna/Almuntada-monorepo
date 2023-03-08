import {podcastInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const updatePodcast = async () => {
  return await podcastInstance.put('/podcasts/:id');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], updatePodcast);
};
