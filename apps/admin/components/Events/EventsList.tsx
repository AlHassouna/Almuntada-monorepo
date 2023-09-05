import {Table} from 'react-bootstrap'
import React, {FC} from 'react'
import {IEvent, EventUpdated, useUpdateEvent} from '@lib/system-design'
import {THSort} from '../TableSort'
import {SwitchLabels} from "@lib/system-design"

type Props = {
    events: IEvent[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>
export const EventsList: FC<Props> = (props) => {
    const {events, setSort, setOrder} = props
    const {mutate} = useUpdateEvent();
    const onChange = (id: number, data: EventUpdated) => {
        mutate({id, data});
    };
    return (
        <Table responsive bordered hover>
            <thead className="bg-light">
            <tr>
                <th><THSort name="id" setSort={setSort} setOrder={setOrder}>#id</THSort></th>
                <th><THSort name="name" setSort={setSort} setOrder={setOrder}>Event Name</THSort></th>
                <th><THSort name="information" setSort={setSort} setOrder={setOrder}>Information</THSort></th>
                <th><THSort name="location" setSort={setSort} setOrder={setOrder}>Location</THSort></th>
                <th><THSort name="organizer" setSort={setSort} setOrder={setOrder}>Organizer</THSort></th>
                <th><THSort name="data" setSort={setSort} setOrder={setOrder}>Date of Event</THSort></th>
                <th><THSort name="img" setSort={setSort} setOrder={setOrder}>Hero Image</THSort></th>
                <th><THSort name="isActive" setSort={setSort} setOrder={setOrder}>IsActive</THSort></th>

            </tr>
            </thead>
            <tbody>
            {events.map((event, index) => (
                <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.name}</td>
                    <td>{event.information}</td>
                    <td>{event.location}</td>
                    <td>{event.organizer}</td>
                    <td>{event.dateOfEvent}</td>
                    <td>
                        <div className="position-relative mx-auto" style={{width: '70px', height: '70px'}}>
                            <img
                                style={{objectFit: 'contain', width: '70px', height: '70px'}}
                                alt={event.name}
                                src={event.image}
                            />
                        </div>
                    </td>
                    <td>
                        <SwitchLabels id={event.id} label={event.isActive ? "Active" : "Disabled"}
                                      checked={event.isActive}
                                      onChange={onChange}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}
