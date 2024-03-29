import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FilmItem from './FilmItem'
import './NowPlaying.css'


export default function NowPlaying() {
  //头部信息
  const config = {
    headers: {
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1671539324932231241531393"}',
      "X-Host": "mall.film-ticket.film.list",
      "EagleEye-SessionID": "y6lbnbybweF74yc6awjw5ww6jU6n",
      "EagleEye-TraceID": "8aa4c5801671539327532100044555"
    }
  };

  //组件挂载完成调用接口渲染数据到页面
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get("/api/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=167457",
      config
    ).then(res => {
      setList(res.data.data.films);
    })
  }, []);

  // 编程路由传参
  const navigate = useNavigate();
  const viewDetail = (id) => {
    //方式一声明式传参
    // navigate(`/detail?id=${id}`)

    //方式二路由传参
    navigate(`/detail/${id}`)
  }

  return (
    <div>
      <ul className='video-items'>
        {
          list.map(item =>
            <li onClick={()=>viewDetail(item.filmId)}>
              <FilmItem key={item.filmId} {...item}/>
            </li>
          )
        }
      </ul>
    </div>
  )
}
