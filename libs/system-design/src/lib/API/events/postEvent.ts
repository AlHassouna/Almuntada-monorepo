import {backendInstance} from "../api";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {EventCreated} from "./types";

export const postEvent = async (data: EventCreated) => {
    return await backendInstance.post("/events", data)
};

export const usePostEventMutation = () => {
    const queryClient = useQueryClient();
    return useMutation((data: EventCreated) => postEvent(data), {
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["events"]});
        }
    });
};
