import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './Detail'

export default class News extends Component {

  news = [
    {id:1, title:"顾彬：“一带一路”倡议令他国受益"},
    {id:2, title:"直播｜播种“天宫课堂”第三课开讲啦！"},
    {id:3, title:"最新研究报告：冷战后美国海外军事干预愈演愈烈"},
    {id:4, title:"动态清零为何是“最优解”？"},
    {id:5, title:"为世界永续和平发展贡献中国力量"},
  ];

  render() {
    return (
      <div>
        <ul className='news-list'>
          {
            this.news.map((newsObj)=>{
              return (
                <li className='news-item' key={newsObj.id}>
                  <Link to={`detail/${newsObj.id}/${newsObj.title}`}>{newsObj.title}</Link>
                </li>
                )
            })
          }
        </ul>
        <Routes>
          <Route path='detail'>
            <Route path=':id/:title' element={<Detail/>}></Route>
          </Route>
        </Routes>
      </div>
    )
  }
}
