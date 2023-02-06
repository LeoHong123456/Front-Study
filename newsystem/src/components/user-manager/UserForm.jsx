import React from 'react'
import { Form, Input, Select } from 'antd'

const UserForm = (props) => {
  const { form } = Form.useForm;

  return (
    <Form
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
            maxLenght: 12,
            min: 6,
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
            maxLenght: 12,
            min: 6,
            message: '密码不能为空!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="region"
        label="区域"
        rules={[
          {
            required: true,
            message: '请选择区域!',
          },
        ]}
      >
        <Select placeholder='请选择区域'>
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
        <Select placeholder='请选择角色'>
          {
            props.roles.map(item => {
              return <Select.Option key={item.id} value={item.roleName}>{item.title}</Select.Option>
            })
          }
        </Select>
      </Form.Item>
    </Form>
  )
}
export default UserForm;