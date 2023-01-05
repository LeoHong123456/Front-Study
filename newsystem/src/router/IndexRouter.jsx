import React from 'react'
import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect'

export default function IndexRouter() {
  const LayzLoad = (path) => {
    const Components = React.lazy(() => import(`../views/${path}`))
    return (
      <React.Suspense fallback={<>加载中。。。</>}>
        <Components />
      </React.Suspense>
    )
  }
  const AuthComponent = (props) => {
    const token = localStorage.getItem('token')
    return token ? props.children : <Redirect to='login' />
  }
  const element = useRoutes([
    {
      path: 'login',
      element: LayzLoad('login/Login'),
    },
    {
      path: '/news',
      element: LayzLoad('News')
    },
    {
      path: '/',
      element: <AuthComponent>{LayzLoad('sandbox/NewsSandBox')}</AuthComponent>
    }
  ]);
  return (element)
}
