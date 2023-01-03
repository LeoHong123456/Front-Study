import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import Loading from '../components/Loading';
import './PlayingDetail.css'

export default function PlayingDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id")
  const config = {
    headers: {
      "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1671519450920948362444801"}',
      "X-Host": "mall.film-ticket.film.info"
    },
    timeout: 5000
  }
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get(`/api/gateway?filmId=${id}&k=6941512`, config).then(res => {
      setList(res.data.data.film)
      setLoading(false)
    }).catch((error) => {
      if (error.request) {
        window.alert("网络异常，加载失败！")
        setLoading(false)
      }
    })
  }, [list]);


  const navigate = useNavigate();
  function goBank() {
    navigate(`/film`);
  }

  let flag = false;
  function showMemo(event) {
    const playingMemo = document.querySelector("#playingMemo")
    if (flag) {
      playingMemo.className = "playing-memo"
      event.target.className = "toggle"
    } else {
      playingMemo.className = "playing-memo-show"
      event.target.className = "toggle-top"
    }
    flag = !flag;
  }

  return (
    <>
      {
        loading ? (<Loading />) : (
          <div className='playing-wrapper'>
            <div className='playing-detail-dec'>
              <div className='film-header'>
                <div className='film-goback' onClick={() => goBank()}></div>
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

                <div id="playingMemo" className='playing-memo'>
                  <p>{list?.synopsis}</p>
                </div>
                <div className='toggle' onClick={(e) => showMemo(e)}></div>
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
                          <div className="actors-content">
                            <div className='actors-detail'>
                              <img className='actors-img' src={item.avatarAddress} alt="" />
                              <div className='roule-detail'>
                                <p>{item.name}</p>
                                <p>{item.role}</p>
                              </div>
                            </div>
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
    </>
  )
}
