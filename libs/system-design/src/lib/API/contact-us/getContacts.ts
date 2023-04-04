import {backendInstance} from '../api';
import {useQuery} from '@tanstack/react-query';

const getContacts = async () => {
  return await backendInstance.get('/contact');
};

const useGetContact = (auth?: string) => {
  return useQuery<object, Error>(['contact'], getContacts);
};
