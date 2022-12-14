import React, { Component } from 'react'
import {Route, Routes, Link, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <React.StrictMode>
        <div className='container'>
          <Header/>
          <div className='main'>
            <div className='nav-menu'>
              <div className='menu-nav'>
                <ul className='nav-items'>
                  <NavLink className='item curr' to='/home'>首页</NavLink>
                  <NavLink className='item curr' to='/about'>详情页</NavLink>
{/*                     两者效果基本一致，NavLink 自带样式active
                  <Link className='item curr' to='/home'>首页</Link>
                  <Link className='item curr' to='/about'>详情页</Link> */}
                </ul>
              </div>
            </div>          
            <div className="content">
              <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </React.StrictMode>
    )
  }
}
