import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, ApartmentOutlined, ReadOutlined, SearchOutlined, RotateRightOutlined } from "@ant-design/icons";
import Style from "./css/SideMenu.module.scss";
import axios from "axios";
const { Sider } = Layout
export default function SideMenu() {
  const [menus, setMenus] = useState([])
  const { role: { rights } } = JSON.parse(localStorage.getItem("token"))
  const { pathname } = useLocation()
  const openKeys = "/" + pathname.split("/")[1]
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const iconList = {
    "/home": <HomeOutlined />,
    "/user-manage": <UserOutlined />,
    "/right-manage": <ApartmentOutlined />,
    "/news-manage": <ReadOutlined />,
    "/audit-manage": <SearchOutlined />,
    "/publish-manage": <RotateRightOutlined />,
  };

  useEffect(() => {
    axios.get("http://localhost:8000/rights?_embed=children&pagepermisson=1")
      .then((res) => {
        setMenus(res.data)
      })
  }, [])

  const checkPagePermission = (item) => item.pagepermisson !== null && item.pagepermisson === 1 && rights.includes(item.key)
  const renderMenus = (menus) => {
    return menus.map(item => {
      if (checkPagePermission(item) && item.children.length > 0) {
        item.children = item.children.filter(sub => sub.pagepermisson === 1).map(item => {
          let { rightId, ...list } = item
          return { ...list, label: item.title }
        })
        return { ...item, icon: iconList[item.key], label: item.title}
      }
      const data = { ...item, label: item.title, children: ""}
      return (checkPagePermission(item) && { ...data, icon: iconList[item.key]})
    })
  }

  const opneNav = (item) => {
    return navigate(item.key, { replace: true })
  }

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={Style.top}>
        <div className={Style.logo}>新闻管理系统</div>
        <div className={Style.leftMenu}>
          <Menu theme="dark" mode="inline" selectedKeys={[pathname]} defaultOpenKeys={[openKeys]} items={renderMenus(menus)} onClick={(item) => opneNav(item)} />
        </div>
      </div>
    </Sider>
  );
}