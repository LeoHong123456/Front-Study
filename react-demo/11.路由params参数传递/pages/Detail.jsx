import React from 'react'
import { useParams, useMatch } from 'react-router-dom'

export default function Detail() {
  let {id,title,content} = useParams();
/*   获取参数方式二
  const params = useMatch('/home/news/detail/:id/:title/:content')
  console.log(params) */

  return (
    <div>
      <p><span>ID:</span>{id}</p>
      <p><span>TITLE:</span>{title}</p>
      <p><span>CONTENT:</span>{content}</p>
    </div>
  )
}
