import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
const { confirm } = Modal;

export const removeUserConfirm = (record, action, forUse) => {
  confirm({
    title: `Are you sure delete this ${forUse === 'todo' ? 'todo' : ''} ${
      forUse === 'user' ? `${record.name}'s users?` : ''
    }`,
    icon: <ExclamationCircleOutlined />,
    content: `I think you are Happy`,
    okText: 'Delete',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('Delete');
      action(record.key);
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
