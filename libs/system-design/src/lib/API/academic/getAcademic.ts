import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';
import {IAcademic} from './types';

const getAcademic = async (): Promise<IAcademic> => {
  return (await backendInstance.get('/users/:id')).data;
};

const useGetAcademic = (auth?: string) => {
  return useQuery<IAcademic, Error>(['academic'], getAcademic);
};
