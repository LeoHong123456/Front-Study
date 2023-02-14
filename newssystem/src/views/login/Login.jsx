import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import Style from './Login.module.scss'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values)
    axios.get(`http://localhost:8000/users?username=${values.username}&password=${values.password}&roleState=true`)
    .then(res=>{
      console.log(res.data)
    })
    // localStorage.setItem('token', values)
    // navigate("/home", { replace: true })
  }

  return (
    <div className={Style.loginContainer}>
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
