import { backendInstance } from '../api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ContactUsCreated, IContactUs } from './types';


const postContact = async (data: ContactUsCreated): Promise<IContactUs> => {
  return await backendInstance.post('/contact', data);
}

export const usePostContactMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: ContactUsCreated) => postContact(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-us'] });
    },
  });
}
