import {Dropdown, Table} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons'
import React, {FC} from 'react'
import {IAcademic} from '@lib/system-design'
import {THSort} from '../TableSort'
import {useUpdateAcademic, FileUpload} from '@lib/system-design'
import {AcademicUpdated} from '@lib/system-design'

type Props = {
  users: IAcademic[];
} & Pick<Parameters<typeof THSort>[0], 'setSort' | 'setOrder'>
export const UserList: FC<Props> = (props) => {
  const [isEditable, setIsEditable] = React.useState(false);
  const [editedFields, setEditedFields] = React.useState({});
  const [userEdit, setUserEdit] = React.useState<IAcademic | null>(null);
  const {users, setSort, setOrder} = props
  const {mutate} = useUpdateAcademic();
  const onClick = (id: number, data: AcademicUpdated) => {
    mutate({id, data});
  };
  const toggleEditable = (id: number) => {
    setIsEditable(!isEditable);
    setUserEdit(users.find((user) => user.id === id) || null);
  };

  const onFieldChange = (id: number, field: string, value: string) => {
    setEditedFields({
      ...editedFields,
      [id]: {...editedFields[id], [field]: value},
    });
  };

  const onFieldSave = (id: number) => {
    const data = editedFields[id];
    onClick(id, data);
    setIsEditable(false);
  }


  return (
    <Table responsive bordered hover>
      <thead className="bg-light">
      <tr>
        <th><THSort name="id" setSort={setSort} setOrder={setOrder}>#id</THSort></th>
        <th><THSort name="photo" setSort={setSort} setOrder={setOrder}>#Photo</THSort></th>
        <th><THSort name="firstname" setSort={setSort} setOrder={setOrder}>First Name</THSort></th>
        <th><THSort name="lastname" setSort={setSort} setOrder={setOrder}>Last Name</THSort></th>
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
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <FileUpload name='imageUrl' label='imageUrl' setFiledValue={
                  (e, newValue) => {
                    onFieldChange(user.id, 'imageUrl', newValue)
                  }
                }/>
              </td>
            ) : (
              <td>
                <div className="position-relative mx-auto" style={{width: '70px', height: '70px'}}>
                  <img
                    style={{objectFit: 'contain', width: '70px', height: '70px'}}
                    alt={user.firstName}
                    src={user.imageUrl}
                  />
                </div>
              </td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={(e) => {
                  onFieldChange(user?.id, 'firstName', e.target.value)
                }} type="text" value={editedFields[user.id]?.firstName || user.firstName}/>
              </td>
            ) : (
              <td>{user.firstName}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'lastName', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.lastName || user.lastName}/>
              </td>
            ) : (
              <td>{user.lastName}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'email', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.email || user.email}/>
              </td>
            ) : (
              <td>{user.email}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'age', e.target.value)
                  }
                } type="text" value={user.age}/>
              </td>
            ) : (
              <td>{user.age}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'city', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.city || user.city}/>
              </td>
            ) : (
              <td>{user.city}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'degree', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.degree || user.degree}/>
              </td>
            ) : (
              <td>{user.degree}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'gender', e.target.value)
                  }
                } type="text" value={editedFields[user?.id]?.gender || user.gender}/>
              </td>
            ) : (
              <td>{user.gender}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'phone', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.phone || user.phone}/>
              </td>
            ) : (
              <td>{atob(user.phone)}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'subject', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.subject || user.subject.subject}/>
              </td>
            ) : (
              <td>{user.subject.subject}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'company', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.company || user.company.company}/>
              </td>
            ) : (
              <td>{user.company.company}</td>
            )
          }
          {
            isEditable && userEdit.id === user?.id ? (
              <td>
                <input onChange={
                  (e) => {
                    onFieldChange(user.id, 'career', e.target.value)
                  }
                } type="text" value={editedFields[user.id]?.career || user.career.career}/>
              </td>
            ) : (
              <td>{user.career.career}</td>
            )
          }
          <td>{user.isApproved ? 'Approved' : 'Pending'}</td>
          <td>
            <Dropdown align="end">
              <Dropdown.Toggle
                as="button"
                bsPrefix="btn"
                className="btn-link rounded-0 text-black-50 shadow-none p-0"
                id={`action-${user.id}`}
              >
                <FontAwesomeIcon fixedWidth icon={faEllipsisVertical}/>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {
                  onClick(user?.id, {isApproved: true})
                }}>Approve</Dropdown.Item>

                <Dropdown.Item onClick={() => {
                  onClick(user?.id, {isApproved: false})
                }}>Reject</Dropdown.Item>
                {
                  isEditable ? (
                    <Dropdown.Item onClick={() => {
                      onFieldSave(user?.id)
                    }}>Save</Dropdown.Item>
                  ) : (
                    <Dropdown.Item onClick={() => toggleEditable(user?.id)}>Edit</Dropdown.Item>
                  )
                }
              </Dropdown.Menu>
            </Dropdown>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}
