import React, { useState, useEffect } from 'react'
import { Table, Tag, Button, Modal, Space } from 'antd';
import axios from 'axios';
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
export default function RightList() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/rights?_embed=children").then(res => {
      const list = res.data
      list.forEach(item => {
        if (item.children?.length === 0) item.children = ""
        return item;
      })
      setDataSource(list)
    })
  }, [])
  const columns = [
    {
      title: 'ID',
      width: 100,
      dataIndex: 'id',
      key: 'id',
      fixed: 'left',
    },
    {
      title: '权限名称',
      width: 100,
      dataIndex: 'label',
      key: 'label',
      fixed: 'left',
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      key: 'key',
      width: 150,
      render: (key) => {
        return <Tag color="success">{key}</Tag>
      }
    },
    {
      title: '操作',
      fixed: 'right',
      width: 100,
      render: (item) => {
        return <div>
          <Button type="primary" shape="circle" icon={<EditOutlined />} />
          <Button danger onClick={() => confirmMethod(item)} shape="circle" icon={<DeleteOutlined />} />
        </div>
      },
    },
  ];

  const confirmMethod = (item) => {
    Modal.confirm({
      title: '权限',
      icon: <ExclamationCircleOutlined />,
      content: '确定要删除吗？',
      okText: '确认',
      cancelText: '取消',
      onOk() {
        setDataSource(dataSource.filter(data => data.id !== item.id))
        axios.delete(`http://localhost:8000/rights/${item.id}`)
      },
      onCancel() {
        console.log("cancel")
      }
    });
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
        scroll={{
          x: 500,
          y: 600,
        }}
      />
    </div>
  )
}
