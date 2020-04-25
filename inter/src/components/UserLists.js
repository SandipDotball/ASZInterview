import React from 'react';
import { Table } from 'antd';
import { userColumns } from '../utilites/tableHeader';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    action: 32,
  },
  {
    key: '2',
    name: 'John',
    action: 42,
  },
];
function UserLists() {
  return (
    <div className='UserLists'>
      <Table dataSource={dataSource} columns={userColumns} />
    </div>
  );
}

export default UserLists;
