import React from 'react'
import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect'

export default function IndexRouter() {

  //懒加载
  const LayzLoad = (path) => {
    const Components = React.lazy(() => import(`../views/${path}`))
    return (
      <React.Suspense fallback={<>加载中。。。</>}>
        <Components />
      </React.Suspense>
    )
  }

  //校验是否登录状态
  const AuthComponent = (props) => {
    const token = localStorage.getItem('token')
    return token ? props.children : <Redirect to='login' />
  }

  //路由表
  const element = useRoutes([
    {
      name: '登录页面',
      path: 'login',
      element: LayzLoad('login/Login'),
    },
    {
      name: '新闻页面',
      path: '/news',
      element: LayzLoad('News')
    },
    {
      path: '/',
      element: <AuthComponent>{LayzLoad('sandbox/NewsSandBox')}</AuthComponent>,
      children: [
        {
          name: '首页',
          index: true,
          path: 'home',
          element: LayzLoad('sandbox/home/Home'),
        },
        {
          name: '用户列表',
          path: 'user-manage/list',
          element: LayzLoad('sandbox/user-manage/UserList'),
        },
        {
          name: '角色列表',
          path: 'right-manage/role/list',
          element: LayzLoad('sandbox/right-manage/RoleList')
        },
        {
          name: '权限列表',
          path: 'right-manage/right/list',
          element: LayzLoad('sandbox/right-manage/RightList')
        },
        {
          name: '404页面',
          path: '*',
          element: LayzLoad('sandbox/notfound/NotFound'),
        }
      ]
    }
  ]);
  return (element)
}
