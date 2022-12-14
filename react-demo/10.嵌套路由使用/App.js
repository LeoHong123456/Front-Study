import React, { Component } from 'react'
import {Route, Routes, NavLink, Navigate} from 'react-router-dom'
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
                  {/* 路由链接 */}
                  <NavLink className='item' to='/home'>首页</NavLink>
                  <NavLink className='item' to='/about'>详情页</NavLink>
              </ul>
            </div>          
            <div className="content">
              {/* 注册路由 exact={true}开启精准匹配,默认是模糊匹配模糊匹配只需对上前面一层就可以了，精准匹配会匹配全部 */}
              <Routes>
                <Route path='/home/*' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                {/* 如果匹配不到路由就走Navigate */}
                <Route path='/*' element={<Navigate to='/About'/>}/>
              </Routes>
            </div>
          </div>
        </div>
      </React.StrictMode>
    )
  }
}
