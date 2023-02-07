import React, { forwardRef, useState } from 'react'
import { Form, Input, Select } from 'antd'

const UserForm = forwardRef((props, ref) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { form } = Form.useForm;
  return (
    <Form
      ref={ref}
      form={form}
      name="form_in_modal"
      initialValues={{ modifier: 'public' }}
    >
      <Form.Item
        name="username"
        label="用户名"
        rules={[
          {
            required: true,
            message: '用户名不能为空！',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="密码"
        rules={[
          {
            required: true,
            message: '密码不能为空!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="region"
        label="区域"
        rules={isDisabled ? [] : [
          {
            required: true,
            message: '请选择区域!',
          },
        ]}
      >
        <Select disabled={isDisabled} placeholder='请选择区域'>
          {
            props.regions.map(item => {
              return <Select.Option key={item.id} value={item.value}>{item.title}</Select.Option>
            })
          }
        </Select>
      </Form.Item>

      <Form.Item
        name="roleId"
        label="角色"
        rules={[
          {
            required: true,
            message: '请选择角色!',
          },
        ]}
      >
        <Select onChange={(value) => {
          if (value === '1') {
            setIsDisabled(true)
            ref.current.setFieldsValue({ region: "" })
          } else {
            setIsDisabled(false)
          }
        }} placeholder='请选择角色'>
          {
            props.roles.map(item => {
              return <Select.Option key={item.id} value={item.roleId}>{item.roleName}</Select.Option>
            })
          }
        </Select>
      </Form.Item>
    </Form>
  )
})
export default UserForm;