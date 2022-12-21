import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const user = useRef();

  return (
    <div>
      <h2>login</h2>
      <label for="username"></label><input ref={user} id="username" type='text'></input>
      <button onClick={()=>{
        const {current:{value}} = user;
        console.log(`用户名${value}`)
        localStorage.setItem("token",value)
        navigate(`/center`)
        }}>登录</button>
    </div>
  )
}
