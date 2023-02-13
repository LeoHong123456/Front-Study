import React from "react";
import { useRoutes } from "react-router-dom";
import Redirect from "../components/Redirect";
import Home from "../views/sandbox/home/Home";
import Login from "../views/login/Login";
import NewsSandBox from "../views/sandbox/NewsSandBox";
import UserList from '../views/sandbox/user-manage/UserList'
import RoleList from "../views/sandbox/right-manage/RoleList";
import RightList from "../views/sandbox/right-manage/RightList";
import Test from "../views/sandbox/user-manage/Test";
import NotFound from "../views/sandbox/notfound/NotFound";

export default function IndexRouter() {
  //校验是否登录状态
  const AuthComponent = (props) => {
    const token = localStorage.getItem("token");
    return token ? props.children : <Redirect to="login" />;
  };

  //路由表
  const element = useRoutes([
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
          name: "用户列表",
          path: "user-manage/test",
          element: <Test />
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
  return element;
}
