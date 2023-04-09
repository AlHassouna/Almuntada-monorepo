import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {IPodcast} from './types';

const getPodcastByStatus = async (isActive: boolean): Promise<IPodcast> => {
  return (await backendInstance.get(`/podcasts/isActive/${isActive}`)).data;
};

export const useGetPodcastByStatus = (isActive: boolean) => {
  return useQuery<IPodcast, Error>(['podcast'], () => getPodcastByStatus(isActive));
};
