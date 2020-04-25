import React from 'react';
import { Table } from 'antd';
import { todoColumns } from '../utilites/tableHeader';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    dateadd: 32,
    operation: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    dateadd: 42,
    operation: '10 Downing Street',
  },
];

function TodoLists() {
  return (
    <div className='TodoLists'>
      <Table dataSource={dataSource} columns={todoColumns} />
    </div>
  );
}

export default TodoLists;
