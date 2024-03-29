import React, { useEffect, useState } from "react"
import { useRoutes } from "react-router-dom"
import Redirect from "../components/Redirect"
import Home from "../views/sandbox/home/Home"
import Login from "../views/login/Login"
import NewsSandBox from "../views/sandbox/NewsSandBox"
import UserList from '../views/sandbox/user-manage/UserList'
import RoleList from "../views/sandbox/right-manage/RoleList"
import RightList from "../views/sandbox/right-manage/RightList"
import NewsAdd from "../views/sandbox/news-manage/NewsAdd"
import NewsDraft from "../views/sandbox/news-manage/NewsDraft"
import NewsCategory from "../views/sandbox/news-manage/NewsCategory"
import Audit from "../views/sandbox/audit-manage/Audit"
import AuditList from "../views/sandbox/audit-manage/AuditList"
import Unpublished from "../views/sandbox/publish-manage/Unpublished"
import Published from "../views/sandbox/publish-manage/Published"
import Sunset from "../views/sandbox/publish-manage/Sunset"
import NotFound from "../views/sandbox/notfound/NotFound"
import NoPermission from "../views/sandbox/nopermission/NoPermission"
import axios from "axios"

export default function IndexRouter() {
  const [BackRouteList, setBackRouteList] = useState([])
  useEffect(() => {
    Promise.all([
      axios.get(`/rights`),
      axios.get(`/children`),
    ]).then(res => {
      setBackRouteList([...res[0].data, ...res[1].data])
    })
  }, [])

  //校验是否登录状态
  const AuthComponent = (props) => {
    const token = localStorage.getItem("token");
    return token ? props.children : <Redirect to="login" />
  };

  const LocalRouterMap = {
    "/home": <Home/>,
    "/user-manage/list": <UserList/>,
    "/right-manage/role/list": <RoleList/>,
    "/right-manage/right/list": <RightList/>,
    "/news-manage/add": <NewsAdd/>,
    "/news-manage/draft": <NewsDraft/>,
    "/news-manage/category": <NewsCategory/>,
    "/audit-manage/audit": <Audit/>,
    "/audit-manage/list": <AuditList/>,
    "/publish-manage/unpublished": <Unpublished/>,
    "/publish-manage/published": <Published/>,
    "/publish-manage/sunset": <Sunset/>
  }

  const checkRoute = (item) =>{
    return LocalRouterMap[item.key] && item.pagepermisson
  }

  const checkUserPermission = (item) =>{
    // const {role:{rights}} = JSON.parse(localStorage.getItem("token"))
    // return rights.includes(item.key)
    return true;
  }
  
  const routes = BackRouteList.map(item => {
    //验证权限
    if(checkRoute(item) && checkUserPermission(item)){
      return { path: item.key, key: item.key, element: LocalRouterMap[item.key], exact: true }
    }
    return {path: "*", key: item.key, element: <NoPermission/>}
  })

  const initRoutes = [
    { name: '登录页面', path: '/login', element: <Login/> },
    { path: '/', element: <AuthComponent>{<NewsSandBox/>}</AuthComponent>, children: [
      ...routes,
      //等待路由加载完成再渲染404路由，避免出现404
      BackRouteList.length > 0 && {name: '404找不到', path: '*' , element: <NotFound />}
    ]},
  ]
  return useRoutes(initRoutes)


  //路由表
  /*  const element = useRoutes([
     {
       name: "登录页面",
       path: "login",
       element: <Login />
     },
     {
       path: "/",
       element: <AuthComponent>{<NewsSandBox/>}</AuthComponent>,
       children: [
         {
           name: "首页",
           index: true,
           path: "home",
           element: <Home />
         },
         {
           name: "用户列表",
           path: "user-manage/list",
           element: <UserList />
         },
         {
           name: "角色列表",
           path: "right-manage/role/list",
           element: <RoleList />,
         },
         {
           name: "权限列表",
           path: "right-manage/right/list",
           element: <RightList />,
         },
         {
           name: "404页面",
           path: "*",
           element: <NotFound />,
         },
       ],
     },
   ]);
   return element; */
}
