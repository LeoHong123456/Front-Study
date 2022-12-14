import {Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

export default [
  {
    path:'/home',
    element:<Home/>, 
    children:[
      {path:'news', element:<News/>,children:[
        {path:'detail/:id/:title/:content', element:<Detail/>}
      ]},
      {path:'message',element:<Message/>}
    ]
  },
  {path:'/about', element:<About/>},
  {path:'/', element:<Navigate to='/home'/>}
]