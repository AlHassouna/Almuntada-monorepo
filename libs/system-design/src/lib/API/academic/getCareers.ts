import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {Career} from './types';

const getCareers = async (): Promise<Array<Career>> => {
  return (await backendInstance.get('/users/careers')).data;

}
export const useGetCareers = (auth?: string) => {
  return useQuery<Array<Career>, Error>(['careers'], getCareers);
}
