import React, { Component } from 'react'
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import './App.css'

export default class App extends Component {

  render() {
    return (
      <React.StrictMode>
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
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
            </Routes>
          </div>
        </div>
      </React.StrictMode>
    )
  }
}
