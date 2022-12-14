import React from 'react'
import {useLocation} from 'react-router-dom'
export default function Detail() {
  const {state:{id,title,content}} = useLocation();
  return (
    <div>
      <p><span>ID:</span>{id}</p>
      <p><span>TITLE:</span>{title}</p>
      <p><span>CONTENT:</span>{content}</p>
    </div>
  )
}
