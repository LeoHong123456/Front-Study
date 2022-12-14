import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {

  state = {users: [], isFirst: true, isLoading: false, error: '' }

  constructor(props) {
    console.log('第一步执行构造器>>>>')
    super(props)
    this.setState(this.state)
  }

  //组件挂载时接收订阅消息
  componentDidMount() {
    console.log("第二步挂载组件>>>>>>")
    this.token = PubSub.subscribe('github_data', (msg, data) => {
      console.log("接收到的数据->1", data)
      this.setState(data)
    })
  }

  // 组件即将卸载的时候取消订阅
  componentWillUnmount() {
    console.log("第三步卸载组件>>>>")
    PubSub.unsubscribe(this.token)
  }
  
  render() {
    const {isFirst, isLoading, error, users} = this.state
    return (
      <div className='item-wrapper'>
        <ul className='items-list'>
          {
            isFirst ? <h2 style={{ margin: '10px auto' }}>欢迎使用GITHUB</h2> :
            isLoading ? <h2 style={{ margin: '10px auto' }}>加载中请稍后。。。</h2> :
            error ? <p style={{ color: 'red' }}>{error}</p> :
            users.map((item) => {
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
