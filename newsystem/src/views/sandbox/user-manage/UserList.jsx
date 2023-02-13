import React, { useState, useEffect, useRef } from 'react'
import { Table, Button, Switch, Modal, Popconfirm, message } from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import UserForm from '../../../components/user-manager/UserForm'
import Style from './UserList.module.scss'

export default function UserList() {
  const [open, setOpen] = useState(false)
  const [isUpdateDisabled, setIsUpdateDisabled] = useState(false)
  const [updateUserOpen, setUpdateUserOpen] = useState(false)
  const [dataSource, setDataSource] = useState([])
  const [regions, setRegions] = useState([])
  const [roles, setRoles] = useState([])
  const [current, setCurrent] = useState(null)
  const addForm = useRef(null)
  const updateForm = useRef(null)

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

  //修改会员状态
  const handleChange = (item) => {
    item.roleState = !item.roleState;
    setDataSource([...dataSource])
    axios.patch(`http://localhost:8000/users/${item.id}`, {
      roleState: item.roleState
    })
  }

  //删除会员
  const deleteMethod = async (item) => {
    setDataSource(dataSource.filter(data => data.id !== item.id))
    axios.delete(`http://localhost:8000/users/${item.id}`)
    message.success('删除成功！');
  }

  //修改会员信息
  const handleUpdate = (item) => {
    setTimeout(() => {
      setUpdateUserOpen(true)
      updateForm.current.setFieldsValue(item)
      if (item.roleId === 1) {
        setIsUpdateDisabled(true)
      } else {
        setIsUpdateDisabled(false)
      }
    }, 0)
    setCurrent(item)
  }

  //修改会员提交表单信息到服务器
  const submitUpdateUserForm = () => {
    updateForm.current.validateFields().then(value => {
      setUpdateUserOpen(false)
      setIsUpdateDisabled(!isUpdateDisabled)
      setDataSource(dataSource.map(item => {
        if (item.id === current.id) {
          return { ...item, ...value, role: roles.filter(data => data.id === (value.roleId))[0] }
        }
        return item;
      }))
      axios.patch(`http://localhost:8000/users/${current.id}`,{value})
    })
  }

  const submitAddUserForm = () => {
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
          role: roles.filter(item => item.id === (value.roleId))[0]
        }])
      })
    }).catch(err => {
      console.log(err)
    })
  }

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
        return <p className={Style.regionTitle}><b>{region === '' ? '全球' : region}</b></p>
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
      render: (value, item) => {
        return <Switch checked={value} disabled={item.default} onChange={() => handleChange(item)}></Switch>
      }
    },
    {
      title: '操作',
      fixed: 'right',
      width: 150,
      render: (item) => {
        return <div>
          <Button type="primary" disabled={item.default} shape='circle' icon={<EditOutlined />}
            onClick={() => handleUpdate(item)}></Button>
          &nbsp;&nbsp;
          <Popconfirm
            title="删除会员"
            okText="确定"
            cancelText="取消"
            description="确定要删除此会员吗？"
            onConfirm={() => deleteMethod(item)}>
            <Button danger shape="circle" disabled={item.default} icon={<DeleteOutlined />} />
          </Popconfirm>
        </div>
      }
    },
  ]

  return (
    <div>
      <Button type='primary' className={Style.addUser} icon={<PlusOutlined />} onClick={() => setOpen(true)}>新增用户</Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        size='small'
        pagination={{ pageSize: 10 }}
        rowKey={item => item.id}
        scroll={{ x: 1500, y: '100%' }} />

      <Modal
        title="新增用户"
        okText="提交"
        cancelText="取消"
        icon={<PlusOutlined />}
        open={open}
        onCancel={() => { setOpen(false) }}
        onOk={() => submitAddUserForm()}>
        <UserForm regions={regions} roles={roles} ref={addForm} />
      </Modal>

      <Modal
        title="修改用户"
        okText="提交"
        cancelText="取消"
        open={updateUserOpen}
        onOk={() => submitUpdateUserForm()}
        onCancel={() => {
          setUpdateUserOpen(false)
          setIsUpdateDisabled(!isUpdateDisabled)
        }}>
        <UserForm regions={regions} roles={roles} ref={updateForm} isUpdateDisabled={isUpdateDisabled} />
      </Modal>
    </div>
  )
}
