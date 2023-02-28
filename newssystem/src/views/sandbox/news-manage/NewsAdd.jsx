import React, { useEffect, useState, useRef } from 'react'
import { Steps, Button, Form, Input, Select } from 'antd'
import { PageHeader } from '@ant-design/pro-layout';
import Style from './css/NewsAdd.module.scss'
import axios from 'axios'
export default function NewsAdd() {
  const { Option } = Select;
  const newsForm = useRef(null)
  const [current, setCurrent] = useState(0)
  const [categorys, setCategorys] = useState([])
  useEffect(() => { axios.get(`/categories`).then(res => setCategorys(res.data)) }, [])

  const nextStep = () => {
    if (current === 0) {
      newsForm.current.validateFields().then(res => {
          console.log(res)
          setCurrent(current + 1)
      }).catch(error => {
        console.log(error)
      })
    } else {
      setCurrent(current + 1)
    }
  }

  const previous = () => {
    setCurrent(current - 1)
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  const onGenderChange = (value) => {
    console.log(`你选择了= ${value}`)
  }

  return (
    <div>
      <PageHeader className='site-page-header' title='添加新闻' subTitle='新闻' />

      <div className={Style.stepProgress}>
        <Steps current={current} items={[
          {
            title: '基本信息',
            description: '新闻标题，新闻分类'
          },
          {
            title: '新闻内容',
            description: '新闻主体内容',
          },
          {
            title: '新闻提交',
            description: '保存草稿或者提交审核',
          }
        ]} />
      </div>

      <div className={Style.main}>
        <div className={current === 0 ? '' : Style.active}>
          <Form name="basic" ref={newsForm}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off" >
            <Form.Item label="新闻标题" name="title" rules={[{ required: true, message: '新闻标题不能为空!' }]} >
              <Input />
            </Form.Item>
            <Form.Item label="新闻分类" name="categoryId" rules={[{ required: true, message: '请选择新闻分类!' }]}>
              <Select placeholder="请选择分类" onChange={onGenderChange} allowClear >
                {categorys.map(item => <Option value={item.id} key={item.id}>{item.title}</Option>)}
              </Select>
            </Form.Item>
          </Form>
        </div>

        <div className={Style.setp}>
          {
            current < 2 && <Button type='primary' onClick={() => nextStep()}>下一步</Button>
          }
          {
            current > 0 && <Button type='primary' onClick={() => previous()}>上一步</Button>
          }
        </div>
        <div className={Style.newsOperate}>
          {
            current === 2 && <span>
              <Button type='primary' style={{ "marginRight": 25 }}>保存草稿箱</Button>
              <Button danger>提交审核</Button>
            </span>
          }
        </div>
      </div>
    </div>
  )
}
