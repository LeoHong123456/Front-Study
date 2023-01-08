import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import axios from "axios";
import {
  KeyOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import Style from "./css/SideMenu.module.scss";
const { Sider } = Layout;
export default function SideMenu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/rights?_embed=children&pagepermisson=1")
      .then((res) => {
        setMenus(res.data);
      });
  }, []);

  const iconList = {
    home: <HomeOutlined />,
    "/user-manage": <UserOutlined />,
    "/user-manage/list": <UserOutlined />,
    "/right-manage": <UserOutlined />,
    "/right-manage/role/list": <UserOutlined />,
    "/right-manage/right/list": <UserOutlined />,
  };

  const { pathname } = useLocation();
  const openKeys = pathname.split("/")[1];
  const [collapsed, setCollapsed] = useState(false);

  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      if (item.children?.length > 0 && checkPagePermission(item)) {
        return (
          <Menu.SubMenu
            key={item.key}
            icon={iconList[item.key]}
            title={item.label}
          >
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        checkPagePermission(item) && (
          <Menu.Item key={item.key} icon={iconList[item.key]}>
            <Link to={item.key}>{item.label}</Link>
          </Menu.Item>
        )
      );
    });
  };
  const checkPagePermission = (item) => {
    return item.pagepermisson;
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={Style.logo}>新闻管理系统</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={[openKeys]}
      >
        {renderMenu(menus)}
      </Menu>
    </Sider>
  );
}
