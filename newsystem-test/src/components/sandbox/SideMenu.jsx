import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined ,ApartmentOutlined, ReadOutlined, SearchOutlined, RotateRightOutlined} from "@ant-design/icons";
import Style from "./css/SideMenu.module.scss";
import axios from "axios";

const { Sider } = Layout;
export default function SideMenu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/rights?_embed=children&pagepermisson=1")
      .then((res) => {
        setMenus(res.data);
      })
  }, [])

  const iconList = {
    "/home": <HomeOutlined />,
    "/user-manage": <UserOutlined />,
    "/right-manage": <ApartmentOutlined />,
    "/news-manage":<ReadOutlined />,
    "/audit-manage":<SearchOutlined />,
    "/publish-manage":<RotateRightOutlined />,
  };

  const { pathname } = useLocation();
  const openKeys = "/"+ pathname.split("/")[1];
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const renderMenu = (menuList) => {
    return menuList.map((item) => {
      if (item.children?.length > 0 && checkPagePermission(item)) {
        return (
          <Menu.SubMenu
            key={item.key}
            icon={iconList[item.key]}
            title={item.title}
          >
            {renderMenu(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        checkPagePermission(item) && (
          <Menu.Item key={item.key} icon={iconList[item.key]} title={item.title}
            onClick={(e) => {
              navigate(e.key, { replace: true })
            }}>
            {item.title}
          </Menu.Item>
        )
      );
    });
  };

  const checkPagePermission = (item) => {
    return item.pagepermisson === 1;
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className={Style.top}>
        <div className={Style.logo}>新闻管理系统</div>
        <div className={Style.leftMenu}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            defaultOpenKeys={[openKeys]}
          >
            {renderMenu(menus)}
          </Menu>
        </div>
      </div>
    </Sider>
  );
}
