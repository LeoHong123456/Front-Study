import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'

const { Content } = Layout;
export default function NewsSandBox() {
  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout>
      <SideMenu />
      <Layout className='site-layout'>
        <TopHeader />
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
