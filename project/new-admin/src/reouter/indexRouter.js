import React from 'react'
import {HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sanbox/NewsSandBox'

export default function indexRouter() {

  const SignInWrapper = ({ children, token }) => {
    console.log(`children=${children}, token=${token}`)
    return token ? children : <Navigate to="/" replace />;
  };

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to='login' replace/>}/>
        <Route path='login' element={<Login/>} />
        <Route path='/newsSandBox/*' element={
          <SignInWrapper token={localStorage.getItem('token')}>
            <NewsSandBox/>
          </SignInWrapper>}/>
      </Routes>
    </HashRouter>
  )
}
