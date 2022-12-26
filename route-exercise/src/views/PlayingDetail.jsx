import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
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
  }, [list]);

  const navigate = useNavigate();
  function goBank(){
    navigate(`/film`);
  }

  return (
    <div className='playing-wrapper'>
      <div className='playing-detail-dec'>
        <div className='film-header'>
          <div className='film-goback' onClick={()=>goBank()}></div>
        </div>
        <div className='playing-banner'>
          <img className='playing-img' src={list?.poster} alt=''></img>
        </div>

        <div className='playing-detail-c'>
          <div className='playing-grand-wrapper'>
            <div><span>{list?.name}</span></div>
            <div className='playing-grade'>
              <span>{list?.grade}</span>
              <span>分</span>
            </div>
          </div>
          <div className='playing-content-title'>
            <span>{list?.category}</span>
            <span>{list?.premiereAt} 上映</span>
            <span>{list?.nation}</span>
          </div>
          <div className='playing-memo'>
            <p>{list?.synopsis}</p>
          </div>
        </div>
      </div>

      <div className='actors'>
        <div className='actors-title-bar'>
          <span className='actors-title-text'>演员列表</span>
        </div>
        <div className="actors-list">
          <ul className='actors-item'>
            {
              list.actors?.map((item, index) => {
                return (
                  <li key={index}>
                    <div className='actors-detail'>
                      <img className='actors-img' src={item.avatarAddress} alt=""></img>
                      <p>{item.name}</p>
                      <p>{item.role}</p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div className="photos">
        <div className="photos-title-bar">
          <p>剧照</p>
          <p>全部({list.photos?.length})</p>
        </div>
        <div className="photos-list">
          <ul className='row-scroll-items-nav'>
            {
              list.photos?.map((item, index) => {
                return (
                  <li key={index}>
                    <img className='target-img' src={item} alt=""></img>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <NavLink className="goSchedule">
        <p>选座购票</p>
      </NavLink>
    </div>
  )
}
