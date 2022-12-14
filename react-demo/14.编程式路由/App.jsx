import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
import './css/index.css'

export default function App() {
  /* 根据路由表生产规则 */
  const element = useRoutes(routes)
  return (
    <div className='container'>
      <Header/>
      <div className='main-content'>
        <div className='main-nav'>
          <NavLink className='items' to='/home'>首页</NavLink>
          <NavLink className='items' to='/about'>详情</NavLink>
        </div>
        <div className='section'>
          {/*传统路由使用方式一
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/' element={<Navigate to='/home'/>} />
          </Routes> */}
          {/* 使用路由表 */}
          {element}
        </div>
      </div>
    </div>
  )
}
