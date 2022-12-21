import React from 'react'
import './NowPlaying.css'

export default function FilmItem(item) {
  return (
      <div className='video-container'>
        <img className="video-img" src={item.poster} />
        <p className='video-title'>{item.name}</p>
      </div>
  )
}
