import {backendInstance} from "../api";
import {useQuery} from "@tanstack/react-query";
import {IEvent} from "./types";

const getEvents = async (isActive: boolean): Promise<IEvent> => {
    return (await backendInstance.get(`/events/isActive/${isActive}`)).data;
};

export const useGetEvents = (isActive: boolean) => {
    return useQuery<IEvent, Error>(['events'], () => getEvents(isActive));
};
