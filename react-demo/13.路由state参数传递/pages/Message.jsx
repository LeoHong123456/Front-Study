import React from 'react'

export default function Message() {
  const msgs=[
    {id:'01',content:'消息1'},
    {id:'02',content:'消息2'},
    {id:'03',content:'消息3'},
    {id:'04',content:'消息4'},
    {id:'05',content:'消息5'},
  ]
  return (
    <div>
      <ul className='message-item'>
        {
          msgs.map((msgObj)=>{
            return <li key={msgObj.id}>{msgObj.content}</li>
          })
        }
      </ul>
    </div>
  )
}
