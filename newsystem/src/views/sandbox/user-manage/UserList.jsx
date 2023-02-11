import React, { useState, useEffect, useRef } from 'react'
import { Table, Button, Switch, Modal } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import UserForm from '../../../components/user-manager/UserForm'
import axios from 'axios'

export default function UserList() {
  const [open, setOpen] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [regions, setRegions] = useState([]);
  const [roles, setRoles] = useState([]);
  const addForm = useRef(null);
  //获取用户列表
  useEffect(() => {
    axios.get(`http://localhost:8000/users?_expand=role`).then((res) => {
      setDataSource(res.data)
    })
  }, [])

  //获取区域列表
  useEffect(() => {
    axios.get(`http://localhost:8000/regions`).then(res => {
      setRegions(res.data)
    })
  }, [])

  //获取角色列表
  useEffect(() => {
    axios.get(`http://localhost:8000/roles`).then(res => {
      setRoles(res.data)
    })
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      width: 50
    },
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
      width: 80
    },
    {
      title: '区域',
      key: 'region',
      dataIndex: 'region',
      width: 100,
      render: (region) => {
        return <p style={{ width: '60px', textAlign: 'center', borderRadius: '5px', backgroundColor: 'pink' }}><b>{region === '' ? '全球' : region}</b></p>
      }
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      width: 80,
      render: (role) => {
        return role?.roleName
      }
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      width: 100,
      render: (roleState, item) => {
        return <Switch checked={roleState} disabled={item.default}></Switch>
      }
    },
    {
      title: '操作',
      fixed: 'right',
      width: 150,
      render: (item) => {
        return <div>
          <Button type="primary" disabled={item.default} shape='circle' icon={<EditOutlined />}></Button>
          &nbsp;&nbsp;
          <Button danger shape="circle" onClick={()=>deleteMethod(item)} disabled={item.default} icon={<DeleteOutlined />} />
        </div>
      }
    },
  ]

  const deleteMethod = (item) => {
    console.log(item)
    setDataSource(dataSource.filter(data => data.id !== item.id))
    axios.delete(`http://localhost:8000/users/${item.id}`)
  }

  return (
    <div>
      <Button type='primary' onClick={() => setOpen(true)}>新增用户</Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        size='small'
        pagination={{ pageSize: 10 }}
        rowKey={item => item.id}
        scroll={{
          x: 1500,
          y: '100%',
        }}
      />
      <Modal
        open={open}
        title="新增用户"
        okText="提交"
        cancelText="取消"
        onCancel={() => {
          setOpen(false)
        }}
        onOk={
          () => {
            //获取表单数据
            addForm.current.validateFields().then(value => {
              setOpen(false)
              //重置表单
              addForm.current.resetFields()
              axios.post(`http://localhost:8000/users`, {
                ...value,
                "roleState": true,
                "default": false
              }).then(res => {
                setDataSource([...dataSource, {
                  ...res.data,
                  role: roles.filter(item => item.id ===(value.roleId + ""))[0]
                }])
              })
            }).catch(err => {
              console.log(err)
            })
          }
        }
      >
        <UserForm regions={regions} roles={roles} ref={addForm} />
      </Modal>
    </div>
  )
}
