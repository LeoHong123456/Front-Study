import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'
import './PlayingDetail.css'

export default function PlayingDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id")
  const config = {
    headers: {
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1671519450920948362444801"}',
      "X-Host": "mall.film-ticket.film.info"
    }
  }
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`/api/gateway?filmId=${id}&k=6941512`, config).then(res => {
      setList(res.data.data.film)
    })
  }, []);

  return (
    <div className='playing-wrapper'>
      <div className='playing-detail-dec'>
        <div className='playing-banner'>
          <img src={list.poster} alt=''></img>
        </div>

        <div className='playing-detail-c'>
          <div className='playing-grand'>
            <div><span>电影名</span></div>
            <div><span>评分</span></div>
          </div>

          <div className='playing-content-title'>
            <span>动作</span>
            <span>年月</span>
            <span>地区</span>
          </div>

          <div className='playing-memo'>
            <p>《阿凡达：水之道》的剧情承接自第一部的5年之后。曾经的地球残疾军人杰克·萨利，如今已经是潘多拉星球纳美族一方部族的族长，并且与爱妻娜塔莉共同育有一对可爱的儿女，日子过得平淡而充实。然而某天，有个部族的兄弟在海岸附近巡逻时遭到利器割喉身亡。通过现场勘查，以及作为前海军陆战队员的敏锐直觉，杰克判断已经有人类的阿凡达混入了部落……</p>
          </div>
        </div>
      </div>

    </div>
  )
}
