import React from 'react'
import { Link,Outlet} from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <ul className='home-nav'>
        <li>
          <Link to='message'>消息组件</Link>
        </li>
        <li>
          <Link to='news'>新闻组件</Link>
        </li>
      </ul>

      <div className="home-content">
        <Outlet/>
      </div>
    </div>
  )
}
