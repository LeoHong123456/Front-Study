import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'antd';
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import NoPermission from './no-permission/NoPermission'

export default function NewsSanBox() {
  const { Content, Footer } = Layout;
  return (
    <Layout>
      {/* 侧边栏菜单导航 */}
      <SideMenu />
      <Layout className="site-layout">
        {/* 头部信息 */}
        <TopHeader />
        {/* 内容体 */}
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }} >
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/user-manage/list' element={<UserList />} />
            <Route path='/right-manage/role/list' element={<RoleList />} />
            <Route path='/right-manage/right/list' element={<RightList />} />
            <Route path='/' exact element={<Home />}></Route>
            <Route path='*' element={<NoPermission />} />
          </Routes>
        </Content>
        {/* 底部信息 */}
        <Footer style={{ textAlign: 'center', }} >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
