import React, { useState, useEffect } from 'react'
import { Table, Tag, Button, Modal, Popover, Switch } from 'antd';
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
      dataIndex: 'title',
      key: 'title',
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
          <Popover
            content={<div style={{textAlign:'center'}}>
              <Switch checked={item.pagepermisson} onChange={()=>switchMethod(item)}></Switch>
            </div>}
            title="修改配置"
            trigger={item.pagepermisson === undefined ? '' : 'click'}
          >
            <Button type="primary" shape="circle" icon={<EditOutlined />} />
          </Popover>
          &nbsp;&nbsp;&nbsp;
          <Button danger onClick={() => confirmMethod(item)} shape="circle" icon={<DeleteOutlined />} disabled={item.pagepermisson === undefined} />
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
        if (item.grade === 1) {
          setDataSource(dataSource.filter(data => data.id !== item.id))
          axios.delete(`http://localhost:8000/rights/${item.id}`)
        } else {
          let list = dataSource.filter(data => data.id === item.rightId)
          list[0].children = list[0].children.filter(data => data.id !== item.id)
          setDataSource([...dataSource])
          axios.delete(`http://localhost:8000/children/${item.id}`)
        }
      },
      onCancel() {
        console.log("cancel")
      }
    });
  }

  const switchMethod = (item)=>{
    item.pagepermisson = item.pagepermisson === 1 ? 0 : 1;
    setDataSource([...dataSource])
    if(item.grade === 1){
      axios.patch(`http://localhost:8000/rights/${item.id}`,{
        pagepermisson: item.pagepermisson
      })
    }else{
      axios.patch(`http://localhost:8000/children/${item.id}`,{
        pagepermisson: item.pagepermisson
      })
    }
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
