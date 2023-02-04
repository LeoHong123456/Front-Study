import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Table, Button, Switch} from 'antd'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'

export default function UserList() {
  const [dataSource, setDataSource] = useState([])
  
  useEffect(()=>{
    axios.get(`http://localhost:8000/users`).then((res)=>{
      setDataSource(res.data)
      console.log(dataSource)
    })
  },[])

  const columns = [
    {
      title:'ID',
      key: 'id',
      dataIndex: 'id',
      width: 150
    },
    {
      title:'用户名',
      dataIndex: 'username',
      key: 'username',
      width: 150
    },
    {
      title:'区域',
      key: 'region',
      dataIndex: 'region',
      width: 150,
      render:(item)=>{
        return <br>{item.region}</br>
      }
    },
    {
      title:'角色名称',
      key: 'role',
      dataIndex:'roleName',
      width: 150
    },
    {
      title:'用户状态',
      dataIndex:'roleStatus',
      key: 'roleState',
      render:()=>{
        return <Switch></Switch>
      },
      width: 150
    },
    {
      title:'操作',
      fixed: 'right',
      width: 150,
      render:()=>{
        return <div>
            <Button type="primary"  shape='circle' icon={<EditOutlined />}></Button>
            &nbsp;&nbsp;
            <Button danger shape="circle" icon={<DeleteOutlined />}/>
        </div>
      }
    },
  ]

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        size='middle'
        pagination={{ pageSize: 20 }}
        scroll={{
          x: 1500,
          y: '100%',
        }}
      />
    </div>
  )
}
