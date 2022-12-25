import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Film from '../views/Film'
import NowPlaying from '../views/nowplaying/NowPlaying'
import Login from '../views/Login'
import Center from '../views/Center'
import Detail from '../views/Detail'
import NotFound from '../views/NotFound'
import PlayingDetail from '../views/PlayingDetail'


export default function MyRouter() {
  return (
    <Routes>

      <Route path="/film" element={<Film/>}>
        <Route index element={<NowPlaying/>}/>
        <Route path="nowplaying" element={<NowPlaying/>}/>
      </Route>
      <Route path="/login" element={<Login/>}/>
      <Route path="/center" element={<Center/>}/>
      <Route path="/detail" element={<Detail/>}/>
      <Route path="playingDetail" element={<PlayingDetail/>}/>
      <Route path='/' element={<Navigate to="/film"/>}/>
      {/* 404页面 */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}
