import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Detail.css'
export default function Detail(props) {
  return (
    <NavLink className='video-wrapper'>
      <div className='video-content-img'>
        <img src={props.poster} alt={props.category} />
      </div>

      <div className='video-content'>
        <div className='video-title video-name'>{props.name}</div>
        <div className='video-title'>观众评分&nbsp;<span style={{ "color": "#ffb232" }}>{props.grade}</span></div>
        <div className='video-title'>{props.label}</div>
        <div className='video-title'>
          {
            props.actors.map(actor =>
              <span key={`${props.filmId}`}>{actor.name}</span>
            )
          }
        </div>
        <div className='video-title'>{props.area}</div>
        <div className='video-title'>
          <span>{props.nation}&nbsp;|&nbsp;</span>
          <span>{props.runtime}&nbsp;分钟</span>
        </div>
      </div>

      <div className='buy-tickets'>
        <NavLink className="buy-link">
          购票
        </NavLink>
      </div>
    </NavLink>
  )
}
