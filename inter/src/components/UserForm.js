import React from 'react';
import { Form, Input, Modal } from 'antd';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
function UserForm(props) {
  const [form] = Form.useForm();
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='UserForm'>
      <Modal
        title={props.modalTitle}
        visible={props.modalVisible}
        okText={props.okText}
        cancelText={props.cancelText}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              props.onCreate(values);
              form.resetFields();
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
        onCancel={() => props.setModalVisible(false)}>
        <Form
          {...layout}
          form={form}
          name='userfrom'
          initialValues={props.initialValues}
          onFinish={props.onSubmitUser}
          onFinishFailed={onFinishFailed}
          size='large'>
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder='Name' size='large' />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}>
            <Input placeholder='Email' size='large' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default UserForm;
