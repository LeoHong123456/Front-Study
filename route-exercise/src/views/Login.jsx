import React,{useRef} from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import TabBar from '../components/TabBar'

export default function Login() {
  const navigate  =  useNavigate();
  const username = useRef();

  // useEffect(()=>{
  //   const token = localStorage.getItem("token")
  //   if(token !== ''){
  //     navigate('/center')
  //   }
  // },[])

  function login(){
    const {current:{value}} = username;
    localStorage.setItem("token", value)
    navigate('/center');
  }

  return (
    <div>
      <h2>会员登录</h2>
      <hr/>
      <label htmlFor="username"></label><input type="text" ref={username} id = "username"/>
      <hr/>
      <button onClick={()=>login()}>登录</button>
    </div>
  )
}
