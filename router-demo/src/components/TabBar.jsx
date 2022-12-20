import React from 'react'
import { NavLink } from 'react-router-dom'
import './TabBar.css'

export default function TabBar() {
  return (
    <footer>
      <ul className='tab-items'>
        <li><NavLink className={({isActive})=>isActive ? 'myActive': ''} to='/film'>电影</NavLink></li>
        <li><NavLink className={({isActive})=>isActive ? 'myActive': ''} to='/cinema'>影院</NavLink></li>
        <li><NavLink className={({isActive})=>isActive ? 'myActive': ''} to='/center'>我的</NavLink></li>
      </ul>
    </footer>
  )
}
