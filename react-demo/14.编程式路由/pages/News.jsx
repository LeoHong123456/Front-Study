import React,{useState} from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'

export default function News() {
  const navigate = useNavigate();
  const [news] = useState([
    {id:1, title:"顾彬：“一带一路”倡议令他国受益",content:'内容1'},
    {id:2, title:"直播｜播种“天宫课堂”第三课开讲啦！",content:'内容2'},
    {id:3, title:"最新研究报告：冷战后美国海外军事干预愈演愈烈",content:'内容3'},
    {id:4, title:"动态清零为何是“最优解”？",content:'内容4'},
    {id:5, title:"为世界永续和平发展贡献中国力量",content:'内容5'},
  ])

  function showDetail(newsObj){
    //编程式路由导航
    navigate('detail',{
      replace: false,
      state:{
        id: newsObj.id,
        title: newsObj.title,
        content: newsObj.content
      }
    })
  }

  return (
    <div>
      <ul className='news-item'>
        {
          news.map((newsObj)=>{
            let {id, title, content} = newsObj;
            return (
            <li key={id}>
              <Link to='detail' state={{id: id,title: title,content: content}}>{title}</Link>
             <button onClick={()=>showDetail(newsObj)}>查看详情</button>
            </li>)
          })
        }
      </ul>
      <hr/>
      <Outlet/>
    </div>
  )
}
