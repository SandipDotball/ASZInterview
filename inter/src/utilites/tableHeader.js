import React from 'react'
import UserEditDelete from '../components/common/UserEditDelete'

export const todoColumns = [
  {
    title: 'Action',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'DateAdded',
    dataIndex: 'dateadd',
    key: 'dateadd'
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    key: 'operation'
  }
]

export const userColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: x => <UserEditDelete {...x} />
  }
]
