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
          <img className='playing-img' src={list.poster} alt=''></img>
        </div>

        <div className='playing-detail-c'>
          <div className='playing-grand'>
            <div><span>{list.name}</span></div>
            <div><span>评分</span></div>
          </div>

          <div className='playing-content-title'>
            <span>{list.category}</span>
            <span>{list.premiereAt}</span>
            <span>{list.nation}</span>
          </div>

          <div className='playing-memo'>
            <p>{list.synopsis}</p>
          </div>
        </div>
      </div>

    </div>
  )
}
