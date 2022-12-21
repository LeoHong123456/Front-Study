import React from 'react'
import {Routes ,Route} from 'react-router-dom'
import Redirect from "../components/Redirect"
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import NowPlaying from '../views/film/NowPlaying'
import ComingSoon from '../views/film/ComingSoon'
import Search from '../views/comingsoon/Search'
import Detail from '../views/Detail'
import Login from '../views/Login'

export default function MyRouter() {

  return (
    <Routes>
      {/* index属性代表默认页面 */}
      <Route path="/film" element={<Film />}>
        <Route index element={<NowPlaying/>}/>
        <Route path='nowplaying' element={<NowPlaying/>}/>
        <Route path='comingsoon' element={<ComingSoon/>}/>
      </Route>

      <Route path="/login" element={<Login/>}/>
      <Route path="/cinema" element={<Cinema />} />
      <Route path="/cinema/search" element={<Search/>}/>

      {/* 使用路由传参需要改成动态路由 */}
      {/* <Route path="/detail" element={<Detail/>}/> */}
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/center" element={
        <AuthComponent>
          <Center/>
        </AuthComponent>
      }/>

      {/* 匹配/到指定页面 */}
      <Route path='/' element={<Film />} />
      {/* 重定向实现的两种方式 */}
      {/* 匹配所有重定向方案一到指定页面，包含未知的页面 */}
      {/* <Route path='*' element={<Navigate to='/film'/>}/> */}
      {/* 匹配所有重定向方案二到指定页面，包含未知的页面 */}  
      {/* <Route path="*" element={<Redirect to="/film"/>}/> */}
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

// 路由拦截
function AuthComponent(props){
  const {children} = props;
  const token = localStorage.getItem("token");
  return token ? children : <Redirect to="/login"/>
}