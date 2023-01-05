import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Style from './Child.module.scss'


export default function Child() {
  const config = {
    headers: {
      "EagleEye-SessionID": "undefined",
      "EagleEye-TraceID": "f4d67b3d1671523700537100044555",
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1671519450920948362444801","bc":"440300"}',
      "X-Host": "mall.film-ticket.film.list"
    }
  }
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get("api/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=6223073", config)
      .then(res => {
        setList(res.data.data.films)
      }).catch(err => {
        if (err.response) {
          console.log(err.response.data)
        } else {
          console.log("网络异常！")
        }
      })
  }, [])

  return (
    <div>
      Child
      <ul className={Style.playing}>
        {
          list.map((item) => (
            <li key={item.filmId} className={Style.item}>{item.name}</li>
          ))
        }
      </ul>
    </div>
  )
}
