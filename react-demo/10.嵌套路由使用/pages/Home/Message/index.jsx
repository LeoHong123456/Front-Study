import React, { Component } from 'react'
import '../../css/index.css'

export default class Message extends Component {

  messages = [
    {id:1,content:"消息1"},
    {id:2,content:"消息2"},
    {id:3,content:"消息3"},
    {id:4,content:"消息4"},
    {id:5,content:"消息5"},
  ];

  render() {
    return (
      <div>
        <ul>
          {
            this.messages.map((msgObj=>{
              return <li className='msg-items' key={msgObj.id}>{msgObj.content}</li>
            }))
          }
        </ul>
      </div>
    )
  }
}
