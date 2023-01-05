import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Redirect from '../components/Redirect'


export default function MyRouter() {
  return (
    <Routes>
      <Route path="/film" element={LazyLoad("Film")}>
        <Route index element={LazyLoad("nowplaying/NowPlaying")}/>
        <Route path="nowplaying" element={LazyLoad("nowplaying/NowPlaying")}/>
      </Route>
      <Route path="/login" element={LazyLoad("Login")}/>
      <Route path="/center" element={
        <AuthComponent>
          {LazyLoad("Center")}
        </AuthComponent>}/>
      <Route path="/detail" element={LazyLoad("Detail")}/>
      <Route path="playingDetail" element={LazyLoad("PlayingDetail")}/>
      <Route path='/' element={<Navigate to="/film"/>}/>
      {/* 404页面 */}
      <Route path="*" element={LazyLoad("NotFound")}/>
    </Routes>
  )
}

function AuthComponent(props){
  const {children} = props;
  const token = localStorage.getItem('token');
  return token ? children : <Redirect to='/login'/>
}


//路由懒加载封装
 const LazyLoad = (path)=>{
    const Comp = React.lazy(()=>import(`../views/${path}`))
    return (
      <React.Suspense fallback={<>加载中。。。</>}>
        <Comp/>
      </React.Suspense>
    )
 }
