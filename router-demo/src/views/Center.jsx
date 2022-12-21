import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Center() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Center</h2>
        <button onClick={()=>{
          localStorage.removeItem("token")
          navigate(`/login`);
        }}>登出</button>
    </div>
  )
}
