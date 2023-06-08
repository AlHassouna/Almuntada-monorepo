import {backendInstance} from '../api';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {EmailsCreated,IEmails } from '../academic/types';


const postEmails = async (data: EmailsCreated): Promise<IEmails> => {
  return await backendInstance.post('/mail/send', data);
}

export const usePostMailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: EmailsCreated) => postEmails(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['mailer']});
    },
  });
}