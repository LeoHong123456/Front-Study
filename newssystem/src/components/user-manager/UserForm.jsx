import React, { forwardRef, useState, useEffect } from 'react'
import { Form, Input, Select } from 'antd'

const UserForm = forwardRef((props, ref) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { form } = Form.useForm;

  useEffect(() => {
    setIsDisabled(props.isUpdateDisabled)
  }, [props.isUpdateDisabled])

  const { roleId, region } = JSON.parse(localStorage.getItem("token"))
  const roleObj = { 1: "superadmin", 2: "admin", 3: "editor" }
  const checkRegionDisabled = (item) => {
    if (props.isUpdate) {
      return roleObj[roleId] === "superadmin" ? false : true
    } else {
      return roleObj[roleId] === "superadmin" ? false : item.value !== region
    }
  }
  const checkRoleDisabled = (item)=>{
    if (props.isUpdate) {
      return roleObj[roleId] === "superadmin" ? false : true
    } else {
      return roleObj[roleId] === "superadmin" ? false : roleObj[item.id] !== "editor"
    }
  }
  return (
    <Form ref={ref} form={form} name="form_in_modal" initialValues={{ modifier: 'public' }}>
      <Form.Item name="username" label="用户名" rules={[{ required: true, message: '用户名不能为空！' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="密码" rules={[{ required: true, message: '密码不能为空!', }]}>
        <Input />
      </Form.Item>
      <Form.Item name="region" label="区域" rules={isDisabled ? [] : [{ required: true, message: '请选择区域!' }]}>
        <Select disabled={isDisabled} placeholder='请选择区域'>
          {
            props.regions.map(item => {
              return <Select.Option key={item.id} value={item.value} disabled={checkRegionDisabled(item)}>{item.title}</Select.Option>
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="roleId" label="角色" rules={[{ required: true, message: '请选择角色!' }]}>
        <Select onChange={(value) => {
          if (value === 1) {
            setIsDisabled(true)
            ref.current.setFieldsValue({ region: "" })
          } else {
            setIsDisabled(false)
          }
        }} placeholder='请选择角色'>
          {
            props.roles.map(item => {
              return <Select.Option key={item.id} value={item.id} disabled={checkRoleDisabled(item)}>{item.roleName}</Select.Option>
            })
          }
        </Select>
      </Form.Item>
    </Form>
  )
})
export default UserForm;