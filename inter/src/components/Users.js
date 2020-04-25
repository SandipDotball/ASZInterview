import React from 'react';
import UserLists from './UserLists';
import CreateModalButton from './common/CreateModalButton';

function Users() {
  return (
    <div className='Users'>
      <CreateModalButton buttonText='Create User' />
      <UserLists />
    </div>
  );
}

export default Users;
