import React from 'react'
import {Button} from 'antd'
import axios from 'axios';

export default function Home() {

  const getData= ()=>{
    axios.get('http://localhost:8080/posts')
    .then((res)=>{
      console.log(res.data);
    })
  } 

  const addData = ()=>{
    axios.post('http://localhost:8080/posts', {"title": "json-server9", "author": "typicode9" })
    .then((res)=>{
      console.log(res.data);
    });
  }

  //这种修改是修改全部的方式
  const repData = ()=>{
    axios.put('http://localhost:8080/posts/1',{title:'修改单条全部数据'})
    .then((res)=>{
      console.log(res.data);
    })
  }

  //局部修改更新方式
  const editData = ()=>{
    axios.patch('http://localhost:8080/posts/2',{title:'修改单条局部数据'})
    .then((res)=>{
      console.log(res.data);
    })
  }

  //删除单条数据
  const delData = ()=>{
    axios.delete('http://localhost:8080/posts/1').then((res)=>{
      console.log(res.data);
    })
  }

  //_embed关联数据
  const embed = ()=>{
    axios.get('http://localhost:8080/posts/1?_embed=comments')
    .then((res)=>{
      console.log(res.data)
    })
  }

  //_expand向上关联数据
  const expand = ()=>{
    axios.get('http://localhost:8080/comments/1?_expand=post')
    .then(res=>{
      console.log(res.data);
    })
  }

  return (
    <div>
      <Button type='primary' onClick={getData}>查看数据</Button>
      <Button type='primary' onClick={addData}>新增数据</Button>
      <Button type='primary' danger onClick={repData}>修改全部数据</Button>
      <Button type='primary' onClick={editData}>修改局部数据</Button>
      <Button type='primary' danger onClick={delData}>删除单行数据</Button>
      <Button type='primary' onClick={embed}>获取向下关联数据</Button>
      <Button type='primary' onClick={expand}>获取向上关联数据</Button>
    </div>
  )
}
