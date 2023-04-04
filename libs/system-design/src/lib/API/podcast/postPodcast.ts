import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const postPodcast = async () => {
  return await backendInstance.post('/podcasts');
};

const useGetPodcast = (auth?: string) => {
  return useQuery<object, Error>(['podcast'], postPodcast);
};
