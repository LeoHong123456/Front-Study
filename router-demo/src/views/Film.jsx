import React from 'react'
import { Outlet } from 'react-router-dom'
import './index.css'

export default function Film() {
  return (
    <div className='film-content'>
      <div style={{ width: "100%", height: 120, backgroundColor: "green" }} >
        <h2>banner</h2>
      </div>
      {/* 路由占位，匹配到子路由会自动添加到此位置 */}
      <Outlet/>
    </div>
  )
}
