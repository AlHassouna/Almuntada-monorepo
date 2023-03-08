import {podcastInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {IPodcast} from './types';

const getPodcast = (): Promise<IPodcast> => {
  return podcastInstance.get('/podcasts/:id');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<IPodcast, Error>(['podcast'], getPodcast);
};
