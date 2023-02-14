import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import React,{ useState } from 'react';

export default function Test() {

  const [open, setOpen] = useState(false);
  
  const [add, setAdd] = useState(false);

  const showModal = () => {
    setOpen(true);
    console.log(`aaa`)
  };

  const showAdd = ()=>{
    setAdd(true);
  }

  const closeAdd = ()=>{
    setAdd(false);
  }

  const hideModal = () => {
    setOpen(false);
    console.log(`bbb`)
  };


  return (
     <>
      <Button type="primary" onClick={showModal}>Modal</Button>

      <Button type="primary" onClick={showAdd}>Modal</Button>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消">
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
      </Modal>

      <Modal
        title="Modal2"
        open={add}
        onOk={showAdd}
        onCancel={closeAdd}
        okText="确认"
        cancelText="取消">
          <p>...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
      </Modal>
    </>
  )
}
