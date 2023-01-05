import React from 'react'
import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect'

export default function MyRouter() {
  const LazyLoad = (path) => {
    const Comment = React.lazy(() => import(`../views/${path}`))
    return (
      <React.Suspense fallback={<>请稍后。。。</>}>
        <Comment />
      </React.Suspense>
    );
  }
  const element = useRoutes([
    {
      path: "film",
      element: LazyLoad("Film"),
      children: [
        {
          path: "*",
          element: LazyLoad("nowplaying/NowPlaying")
        }
      ]
    },
    {
      path: "login",
      element: LazyLoad("Login")
    },
    {
      path: "center",
      element: <AuthComponent>{LazyLoad("Center")}</AuthComponent>
    },
    {
      path: "detail",
      element: LazyLoad("Detail")
    },
    {
      path: "playingDetail",
      element: LazyLoad("PlayingDetail")
    },
    {
      path: "/",
      element: LazyLoad("film")
    },
    {
      path: "*",
      element: LazyLoad("NotFound")
    }
  ])
  return (
    element
  )
}

function AuthComponent(props) {
  const token = localStorage.getItem("token")
  return token ? props.children : <Redirect to="/login" />
}
