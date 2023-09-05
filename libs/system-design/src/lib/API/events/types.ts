export interface IEvent {
    id: number;
    name: string;
    organizer: string;
    location: string;
    information: string;
    dateOfEvent: string;
    image: string;
    isActive: boolean;
}

export interface EventCreated {
    name: string;
    organizer: string;
    location: string;
    information: string;
    dateOfEvent: string;
    image: string;

}

export type EventUpdated = Partial<IEvent>
