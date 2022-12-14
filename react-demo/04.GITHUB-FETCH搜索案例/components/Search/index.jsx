import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  handleSearch = async () => {
    const { eleKeyContent: { value } } = this;
    PubSub.publish('github_data', { isFirst: false, isLoading: true});

    //方式一
    /*  fetch('https://api.github.com/search/users?q='+value).then(
       response=>{
         console.log('服务连接建立成功！');
         return response.json()
       },
       error=>{
         console.error('网络异常！',error);
         return new Promise(()=>{});
       }).then(
         response =>{
           console.log('获取数据成功：',response)
         },
         error =>{
           console.log("获取数据异常！",)
         }
       )); */

//方式二
    /* fetch('https://api.github.com/search/users?q=' + value).then(
      response => {
        console.log('服务连接建立成功！');
        return response.json()
      }).then(
        response => {
          console.log(response)
          if(response.items !== undefined){
            PubSub.publish('github_data', {isFirst: false, isLoading: false, users: response.items, error:''})
          }else{
            PubSub.publish('github_data', {isFirst: false, isLoading: false, error: response.message})
          }
        }
      ).catch((errors) => {
        console.error('发送请求异常了......', errors)
        PubSub.publish('github_data',{isLoading:false, error: errors.message});
      }); */

      //优化版本(fetch基于关注分离的设计思想)
      try{
        let response = await fetch('https://api.github.com/search/users?q=' + value)
        let result =  await response.json()
        if(result.items !== undefined){
          PubSub.publish('github_data', {isFirst: false, isLoading: false, users: result.items, error:''})
        }else{
          PubSub.publish('github_data', {isFirst: false, isLoading: false, error: result.message})
        }
      }catch(error){
        console.error('发送请求异常了......', error)
        PubSub.publish('github_data',{isLoading:false, error: error.message});
      }
  }

  render() {
    return (
      <div className='search-container'>
        <div className='search-input'>
          <input type='text' ref={ele => this.eleKeyContent = ele} placeholder='请输入版本信息' />
        </div>
        <div className='search-btn'>
          <button onClick={this.handleSearch}>搜索</button>
        </div>
      </div>
    )
  }
}
