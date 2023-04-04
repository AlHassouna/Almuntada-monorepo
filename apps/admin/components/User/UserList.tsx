import { Dropdown, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { User } from '../../models/user'
import { THSort } from '../TableSort'

type Props = {
  users: User[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>
export default function UserList(props: Props) {
  const { users, setSort, setOrder } = props

  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
        <tr>
          <th><THSort name="id" setSort={setSort} setOrder={setOrder}>#id</THSort></th>
          <th><THSort name="photo" setSort={setSort} setOrder={setOrder}>#Photo</THSort></th>
          <th><THSort name="fullName" setSort={setSort} setOrder={setOrder}>Name</THSort></th>
          <th><THSort name="email" setSort={setSort} setOrder={setOrder}>Email</THSort></th>
          <th><THSort name="age" setSort={setSort} setOrder={setOrder}>Age</THSort></th>
          <th><THSort name="city" setSort={setSort} setOrder={setOrder}>City</THSort></th>
          <th><THSort name="degree" setSort={setSort} setOrder={setOrder}>Degree</THSort></th>
          <th><THSort name="gender" setSort={setSort} setOrder={setOrder}>Gender</THSort></th>
          <th><THSort name="phone" setSort={setSort} setOrder={setOrder}>Phone</THSort></th>
          <th><THSort name="subject" setSort={setSort} setOrder={setOrder}>Subject</THSort></th>
          <th><THSort name="company" setSort={setSort} setOrder={setOrder}>Company</THSort></th>
          <th><THSort name="job" setSort={setSort} setOrder={setOrder}>Job</THSort></th>
          <th><THSort name="status" setSort={setSort} setOrder={setOrder}>Status</THSort></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>
              <div className="position-relative mx-auto" style={{ width: '70px', height: '70px' }}>
                <img
                  style={{ objectFit: 'contain', width: '70px', height: '70px' }}
                  alt={user.firstName}
                  src={user.imageUrl}
                />
              </div>
            </td>
            <td>{user.firstName + user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.age}</td>
            <td>{user.city}</td>
            <td>{user.degree}</td>
            <td>{user.gender}</td>
            <td>{user.phone}</td>
            <td>{user.subject.subject}</td>
            <td>{user.company.company}</td>
            <td>{user.career.career}</td>
            <td>{user.isApproved ? 'Approved' : 'Pending'}</td>
            <td>
              <Dropdown align="end">
                <Dropdown.Toggle
                  as="button"
                  bsPrefix="btn"
                  className="btn-link rounded-0 text-black-50 shadow-none p-0"
                  id={`action-${user.id}`}
                >
                  <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Block</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
