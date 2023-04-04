import {Table} from 'react-bootstrap'
import React, {FC} from 'react'
import {IContactUs} from '@lib/system-design'
import {THSort} from '../TableSort'

type Props = {
  contacts: IContactUs[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>
export const ContactList: FC<Props> = (props) => {
  const {contacts, setSort, setOrder} = props

  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
      <tr>
        <th><THSort name="id" setSort={setSort} setOrder={setOrder}>#id</THSort></th>
        <th><THSort name="fullName" setSort={setSort} setOrder={setOrder}>FullName</THSort></th>
        <th><THSort name="email" setSort={setSort} setOrder={setOrder}>Email</THSort></th>
        <th><THSort name="subject" setSort={setSort} setOrder={setOrder}>Subject</THSort></th>
        <th><THSort name="message" setSort={setSort} setOrder={setOrder}>Message</THSort></th>

      </tr>
      </thead>
      <tbody>
      {contacts.map((contact, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{contact.fullName}</td>
          <td>{contact.email}</td>
          <td>{contact.subject}</td>
          <td>{contact.message}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}
