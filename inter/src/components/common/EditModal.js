import React from 'react'
import { Modal } from 'antd'

function EditModal (props) {
  return (
    <div className='EditModal'>
      <Modal
        title={props.title}
        visible={props.modalVisible}
        onOk={() => props.onHideModal(false)}
        onCancel={() => props.onHideModal(false)}
      >
        {props.children}
      </Modal>
    </div>
  )
}

export default EditModal
