import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {

  getFileList=()=>{
    axios.post('http://127.0.0.1:3000/api/getFileList').then(
      response=>{
        console.log('响应数据=',response.data)
      },
      error=>{}
    )
  }

  render() {
    return (
      <div>
        <button className='btn-request' onClick={this.getFileList}>获取文件列表</button>
      </div>
    )
  }
}
