import {backendInstance} from '../api';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {IPimagesCreated, IPimages} from "./types";

export const postPimages = async (data: IPimagesCreated): Promise<IPimages> => {
  return await backendInstance.post('/pimages', data);
}

export const usePostPimagesMutation = () => {
  const queryClient = useQueryClient();
  return useMutation((data: IPimagesCreated) => postPimages(data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['pimages']});
    },
  });
}
