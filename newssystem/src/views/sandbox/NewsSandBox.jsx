import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, theme } from 'antd'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import NProgress from 'nprogress'
import  'nprogress/nprogress.css'

const { Content, Footer } = Layout;
export default function NewsSandBox() {
  // NProgress.start()
  // useEffect(()=>{
  //   NProgress.done()
  // })
  const { token: { colorBgContainer }, } = theme.useToken();
  return (
    <Layout>
      <SideMenu />
      <Layout className='site-layout'>
        <TopHeader />
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, overflow: 'auto'}}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center', padding: 0, lineHeight: "48px" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
