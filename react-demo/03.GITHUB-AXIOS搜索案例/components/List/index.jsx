import React, { Component } from 'react'
import './index.css'

export default class List extends Component {

  render() {
    const {users, isFirst, isLoading, error} = this.props;
    return (
      <div className='item-wrapper'>
          <ul className='items-list'>
            {
              isFirst ? <h2 style={{margin:'10px auto'}}>欢迎使用GITHUB</h2>:
              isLoading ? <h2 style={{margin:'10px auto'}}>加载中请稍后。。。</h2>:
              error ? <p style={{color:'red'}}>{error}</p>:
              users.map((item)=>{
                return (
                  <li key={item.id} className='items'>
                    <div className='avatar-img'>
                        <img alt='图片加载失败' src={item.avatar_url}></img>
                    </div>
                    <div className='content'>{item.login}</div>
                  </li>
                )
              })
            }
          </ul>
      </div>
    )
  }
}
