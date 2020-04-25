import React, { useState } from 'react';
import { Button, Modal } from 'antd';

function CreateModalButton(props) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className='CreateModalButton'>
      <div className='CreateModalButton__header'>
        <Button
          type='primary'
          size='large'
          onClick={() => setModalVisible(true)}>
          {props.buttonText}
        </Button>
      </div>

      <Modal
        title={props.buttonText}
        visible={modalVisible}
        onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}>
        {props.children}
      </Modal>
    </div>
  );
}

export default CreateModalButton;
