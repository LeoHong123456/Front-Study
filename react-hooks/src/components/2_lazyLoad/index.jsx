import React, { Component, lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './index.css'
//使用赖加载的方式
// import Home from './Home'
// import About from './About'

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));


export default class RouterHook extends Component {

  render() {
    return (
      <div className='container'>
        <div className='nav-menu'>
          <div className='menu-nav'>
            <ul className='nav-items'>
              <Link className='item' to='/home'>首页</Link>
              <Link className='item' to='/about'>详情页</Link>
            </ul>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/home" element={
              <React.Suspense fallback={<>加载中...</>}>
                <Home />
              </React.Suspense>} />

              <Route path='/about' element={
              <React.Suspense fallback={<>加载中...</>}>
                <About />
              </React.Suspense>} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </div>
    )
  }
}
