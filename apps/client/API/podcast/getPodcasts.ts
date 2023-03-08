import {podcastInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const getPodcasts = async () => {
  return await podcastInstance.get('/podcasts');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], getPodcasts);
};
