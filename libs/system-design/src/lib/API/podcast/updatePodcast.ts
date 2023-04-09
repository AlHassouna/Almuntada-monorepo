import {backendInstance} from '../api';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {PodcastUpdated} from "./types";

interface useMutationParams {
  id: number;
  data: PodcastUpdated;
}

const updatePodcast = async (id: number, data: PodcastUpdated) => {
  return await backendInstance.put("/podcasts", data, {
    params: {
      id
    }
  });
};

export const useUpdatePodcast = () => {
  const queryClient = useQueryClient();
  return useMutation(({id, data}: useMutationParams) => updatePodcast(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["podcast"]});
    }
  });
};
