import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  
  handleSearch = ()=>{
    const {eleKeyContent:{value}} = this;
    PubSub.publish('github_data', {isFirst:false, isLoading:true});
    axios.get('https://api.github.com/search/users?q='+value,{
      header:{'Content-Type':'application/x-www-form-urlencoded'}
    }).then(
      response=>{
        const {items} = response.data;
        PubSub.publish('github_data', {isLoading:false, users:items, error:''});
      },
    ).catch((error)=>{
      PubSub.publish('github_data',{isLoading:false, error: error.message});
    })
  }

  render() {
    return (
      <div className='search-container'>
          <div className='search-input'>
            <input type='text' ref={ele => this.eleKeyContent = ele} placeholder='请输入版本信息'/>
          </div>
          <div className='search-btn'>
            <button onClick={this.handleSearch}>搜索</button>
          </div>
      </div>
    )
  }
}
