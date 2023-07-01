import {backendInstance} from '../api';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {EmailsCreated, IEmails} from '../academic/types';


const postEmails = async (data: EmailsCreated): Promise<IEmails> => {
  return await backendInstance.post('/mail/send', data);
}

const postConfirmationEmail = async (data: EmailsCreated): Promise<IEmails> => {
  return await backendInstance.post('/mail/send-confirmation-email', data);
}


const postSignupEmail = async (data: EmailsCreated): Promise<IEmails> => {
  return await backendInstance.post('/mail/send-signup-email', data);
}

export const usePostSignupEmailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: EmailsCreated) => postSignupEmail(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['mailer']});
    },
  });
}
export const usePostMailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: EmailsCreated) => postEmails(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['mailer']});
    },
  });
}

export const usePostConfirmationEmailMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: EmailsCreated) => postConfirmationEmail(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['mailer']});
    },
  });
}
