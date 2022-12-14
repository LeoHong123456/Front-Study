import React,{useState} from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function News() {
  const [news] = useState([
    {id:1, title:"顾彬：“一带一路”倡议令他国受益",content:'内容1'},
    {id:2, title:"直播｜播种“天宫课堂”第三课开讲啦！",content:'内容2'},
    {id:3, title:"最新研究报告：冷战后美国海外军事干预愈演愈烈",content:'内容3'},
    {id:4, title:"动态清零为何是“最优解”？",content:'内容4'},
    {id:5, title:"为世界永续和平发展贡献中国力量",content:'内容5'},
  ])

  return (
    <div>
      <ul className='news-item'>
        {
          news.map((newsObj)=>{
            let {id, title, content} = newsObj;
            return (<li key={id}>
              {/* replace 开启路由替换模式 */}
              <Link  replace to='detail' state={{id: id,title: title,content: content}}>{title}</Link></li>)
          })
        }
      </ul>
      <hr/>
      <Outlet/>
    </div>
  )
}
