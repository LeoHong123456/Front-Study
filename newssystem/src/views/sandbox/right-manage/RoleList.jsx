import React, { useState, useEffect } from 'react'
import { Table, Button, Modal, Tree } from 'antd'
import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

export default function RoleList() {
  const [dataSource, setDataSource] = useState([])
  const [currentRight, setcurrentRight] = useState([])
  const [currentId, setCurrentId] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [treeData, setTreeData] = useState([])
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'name',
    },
    {
      title: '角色名称',
      dataIndex: 'roleName',
      key: 'roleName',
    },
    {
      title: '操作',
      fixed: 'right',
      width: 200,
      render: (item) => {
        return <div>
          <Button type="primary" shape="circle" icon={<EditOutlined />} onClick={() => {
            showModal(item)
            setcurrentRight(item.rights)
            setCurrentId(item.id)
          }} />
          &nbsp;&nbsp;
          <Button danger onClick={() => confirmMethod(item)} shape="circle" icon={<DeleteOutlined />} />
        </div>
      },
    },
  ];

  useEffect(() => {
    axios.get(`http://localhost:8000/roles`).then((res) => {
      setDataSource(res.data)
    })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/rights?_embed=children`).then(res => {
      setTreeData(res.data)
    })
  }, [])

  const confirmMethod = (item) => {
    Modal.confirm({
      title: '角色',
      icon: <ExclamationCircleOutlined />,
      content: '确定要删除吗？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        setDataSource(dataSource.filter(data => data.id !== item.id))
        axios.delete(`http://localhost:8000/roles/${item.id}`)
      },
      onCancel() {
        console.log(`取消删除！`)
      }
    })
  }

  const handleOk = () => {
    setIsModalOpen(false);
    setDataSource(dataSource.map(item => item.id === currentId ? { ...item, rights: currentRight } : item))
    axios.patch(`http://localhost:8000/roles/${currentId}`,{rights:currentRight});
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCheck = (checkKeys) => {
    setcurrentRight(checkKeys);
  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} rowKey={(item) => item.id}></Table>
      <Modal title="权限分配" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Tree checkable onCheck={onCheck} checkedKeys={currentRight} checkStrictly={false} treeData={treeData} />
      </Modal>
    </div>
  )
}
