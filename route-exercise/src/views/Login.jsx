import React,{useRef} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
  const navigate  =  useNavigate();
  const username = useRef();

  return (
    <div>
      <h2>会员登录</h2>
      <hr/>
      <label htmlFor="username"></label><input type="text" ref={username} id = "username"/>
      <hr/>
      <button onClick={()=>{
        const {current:{value}} = username;
        localStorage.setItem("token", value)
        navigate('/center');
      }}>登录</button>
    </div>
  )
}
