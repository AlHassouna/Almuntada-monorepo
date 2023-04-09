import {Table} from 'react-bootstrap'
import React, {FC} from 'react'
import {IPodcast, PodcastUpdated, useUpdatePodcast} from '@lib/system-design'
import {THSort} from '../TableSort'
import {SwitchLabels} from "@lib/system-design"

type Props = {
  podcasts: IPodcast[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>
export const PodcastsList: FC<Props> = (props) => {
  const {podcasts, setSort, setOrder} = props
  const {mutate} = useUpdatePodcast();
  const onChange = (id: number, data: PodcastUpdated) => {
    mutate({id, data});
  };
  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
      <tr>
        <th><THSort name="id" setSort={setSort} setOrder={setOrder}>#id</THSort></th>
        <th><THSort name="title" setSort={setSort} setOrder={setOrder}>FullName</THSort></th>
        <th><THSort name="isActive" setSort={setSort} setOrder={setOrder}>IsActive</THSort></th>

      </tr>
      </thead>
      <tbody>
      {podcasts.map((podcast, index) => (
        <tr key={podcast.id}>
          <td>{podcast.id}</td>
          <td>{podcast.title}</td>
          <td>
            <SwitchLabels id={podcast.id} label={podcast.isActive ? "Active" : "Disabled"} checked={podcast.isActive}
                          onChange={onChange}/>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}
