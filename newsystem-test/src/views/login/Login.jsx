import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import Particles from 'react-particles-js';
import Style from './Login.module.scss'
export default function Login() {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className={Style.loginContainer}>
      <Particles />
      <div className={Style.loginForm}>
      <div className={Style.formTitle}>
        <h2 className={Style.TitleText}>新闻管理系统</h2>
      </div>
      <Form name="normal_login" className='login-form' onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className={Style.loginFormButton}>登陆</Button>
        </Form.Item>
      </Form>
    </div>
    </div>
  )
}
