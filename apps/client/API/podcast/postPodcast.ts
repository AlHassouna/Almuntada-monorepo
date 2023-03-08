import {podcastInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const postPodcust = async () => {
  return await podcastInstance.post('/podcasts');
};

export const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], postPodcust);
};
