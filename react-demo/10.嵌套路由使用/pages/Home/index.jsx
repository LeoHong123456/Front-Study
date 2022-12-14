import React, { Component } from 'react'
import {Route, Routes, NavLink} from 'react-router-dom'
import Message from './Message'
import News from './News'
import '../css/index.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="nav-list">
          <ul>
            <li className='nav-link'>
              <NavLink to='message'>消息</NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='news'>新闻</NavLink>
            </li>
          </ul>
        </div>
        <Routes>  
            <Route path="message" element={<Message/>} />
            <Route path="news/*" element={<News/>} />
        </Routes>
      </div>
    )
  }
}
