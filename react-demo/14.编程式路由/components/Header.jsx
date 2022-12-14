import React from 'react'
import { useNavigate, } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  let style = {width:80,height:30,border:'none',color:'#000',borderRadius:4,backgroundColor:'pink'};
  return (
    <div>
      <div className='top'>
        <h2>React路由学习</h2>
      </div>
      <div className="nav-button">
        <button style={style} onClick={() => {navigate(-1)}}>←后退</button>
        <button style={style} onClick={() => {navigate(1)}}>→前进</button>
      </div>
    </div>
  )
}
