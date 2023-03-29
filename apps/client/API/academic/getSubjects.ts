import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {Subject} from './types';

const getSubjects = async (): Promise<Array<Subject>> => {
  return (await backendInstance.get('/users/subjects')).data;

}
export const useGetSubjects = (auth?: string) => {
  return useQuery<Array<Subject>, Error>(['subjects'], getSubjects);
}
