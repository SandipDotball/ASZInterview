import React, { useState } from 'react'
import { Button } from 'antd'
import EditModal from './EditModal'
import UserForm from './UserForm'

function UserEditDelete (props) {
  const [openEditUser, setOpenEditUser] = useState(false)
  const [openDeleteUser, setOpenDeleteUser] = useState(false)
  return (
    <div className='UserEditDelete'>
      <Button type='link' onClick={() => setOpenEditUser(true)}>
        Edit
      </Button>
      |
      <Button type='link' onClick={() => setOpenDeleteUser(true)}>
        Delete
      </Button>
      {openEditUser && (
        <EditModal
          onHideModal={setOpenEditUser}
          modalVisible={openEditUser}
          title='Edit User'
        >
          <UserForm />
        </EditModal>
      )}
      {openDeleteUser && 'delete'}
    </div>
  )
}

export default UserEditDelete
