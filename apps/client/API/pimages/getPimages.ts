import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {IPimages} from './types';

const getPimages = async (): Promise<Array<IPimages>> => {
  return await backendInstance.get('/pimages');
};

export const useGetPimages = (auth?: string) => {
  return useQuery<Array<IPimages>, Error>(['pimages'], getPimages);
};
