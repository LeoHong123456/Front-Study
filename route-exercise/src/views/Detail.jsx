import React from 'react'
import { NavLink } from 'react-router-dom'
import './Detail.css'
export default function Detail(props) {
  return (
    <li>
      <NavLink className='video-wrapper'>
        <div>
          <img src={props.poster} alt={props.category} />
        </div>

        <div className='video-content'>
          <div className='video-title video-name'>{props.name}</div>
          
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
            <span>{props.nation}</span>
            <span>{props.runtime}</span>
          </div>
        </div>

        <div className='buy-tickets'>
          <NavLink className="buy-link">
            购票
          </NavLink>
        </div>
      </NavLink>
    </li>
  )
}
