import React, { Component } from 'react'
import {Route, Routes, NavLink} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

export default class App extends Component {
  /**
   * 样式丢失问题解决
   * 1、public/index.html中引入样式时不写./ 写 /(常用)
   * 2、public/index.html中引入样式时不写./ 写 %PUBLIC_URL%
   * 3、使用HashRouter
   */
  render() {
    return (
      <React.StrictMode>
        <div className='container'>
          <Header/>
          <div className='main'>
            <div className='nav-menu'>
              <ul className='nav-items'>
                  <NavLink activeClassName='curr' className='item' to='/home'>首页</NavLink>
                  <NavLink activeClassName='curr' className='item' to='/about'>详情页</NavLink>
              </ul>
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
