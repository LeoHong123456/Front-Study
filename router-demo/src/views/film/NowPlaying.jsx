import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './NowPlaying.css'


export default function NowPlaying() {
  //头部信息
  const config = {
    headers: {
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1671519450920948362444801","bc":"440300"}',
      "X-Host": "mall.film-ticket.film.list",
      "EagleEye-SessionID": "undefined",
      "EagleEye-TraceID": "f4d67b3d1671523700537100044555"
    }
  };

  //组件挂载完成调用接口渲染数据到页面
  const [list, setList] = useState([])
  useEffect(() => {
    axios.get("/api/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6223073",
      config
    ).then(res => {
      setList(res.data.data.films);
    })
  }, []);

  // 编程路由传参
  const navigate = useNavigate();
  const viewDetail = (id) => {
    navigate(`/detail?id=${id}`);
  }

  return (
    <div>
      <ul className='video-items'>
        {
          list.map(item =>
            <li key={item.filmId} onClick={()=>viewDetail(item.filmId)}>
              <div className='video-container'>
                <img className="video-img" src={item.poster} />
                <p className='video-title'>{item.name}</p>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  )
}
