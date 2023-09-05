import {backendInstance} from '../api';
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {EventUpdated} from "./types";

interface useMutationParams {
    id: number;
    data: EventUpdated;
}

const updateEvent = async (id: number, data: EventUpdated) => {
    return await backendInstance.put("/events", data, {
        params: {
            id
        }
    });
};

export const useUpdateEvent = () => {
    const queryClient = useQueryClient();
    return useMutation(({id, data}: useMutationParams) => updateEvent(id, data), {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["podcast"]});
        }
    });
};
