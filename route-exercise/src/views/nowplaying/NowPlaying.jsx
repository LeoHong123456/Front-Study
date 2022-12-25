import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Detail from '../Detail'
import './NowPlaying.css'
import PlayingDetail from '../PlayingDetail'

export default function NowPlaying() {

  const config = {
    headers: {
      "EagleEye-SessionID": "undefined",
      "EagleEye-TraceID": "f4d67b3d1671523700537100044555",
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1671519450920948362444801","bc":"440300"}',
      "X-Host": "mall.film-ticket.film.list"
    }
  }

  const [list, setList] = useState([])
  useEffect(() => {
    axios.get("api/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6223073", config)
      .then(res => setList(res.data.data.films))
  }, []);


  const navigate = useNavigate();
  function playingDetail(id){
    console.log(id)
    navigate(`/playingDetail?id=${id}`)
  }
  
  return (
    <div className='video-container'>
      <ul>
        {
          list.map(item =>
            <li onClick={()=>playingDetail(item.filmId)}>
              <Detail key={item.filmId} {...item} />
            </li>
          )
        }
      </ul>
    </div>
  )
}
