import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Layout, Menu } from 'antd';
import { UserOutlined, HighlightOutlined, HomeOutlined, KeyOutlined } from '@ant-design/icons';
import './SideMenu.css'

export default function SideMenu(props) {
  const [menus, setMenus] = useState([]);
  let navigate = useNavigate();
  const { Sider } = Layout;

  useEffect(() => {
    axios.get('http://localhost:8080/menus?_embed=children')
      .then((res) => {
        setMenus(res.data)
      })
  }, []);

  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div style={{ height:"100%", display: 'flex', flexFlow: 'column nowrap' }}>
        <div className="logo">
          <HighlightOutlined />
          博客后台管理
        </div>
        <div style={{flex: 1, overflow: 'auto'}}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['/user-manage']}
            mode="inline"
            theme="dark"
            items={menus}
            onClick={(menuObj) => {
              navigate(menuObj.key, { replace: true })
            }}
          />
        </div>
      </div>
    </Sider >
  )
}
