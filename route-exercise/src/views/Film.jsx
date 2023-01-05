import React from 'react'
import { Outlet } from 'react-router-dom'
import './Film.css'

export default function Film() {
  return (
    <div className='main'>
      <div className='tabs-wrapper'>
        <div className='tabs-bar'>
          <div className='tabs-content'>
            <span>正则热映</span>
          </div>
          <div className='tabs-content'>
            <span>即将上映</span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
