import React, { useState } from 'react'
import { Layout, theme, Dropdown, Space } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from '@ant-design/icons';
import Style from './css/TopHeader.module.scss'
const { Header } = Layout;
export default function TopHeader() {
  const { token: { colorBgContainer } } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true,
    },
  ];

  return (
    <Header
      style={{ padding: '0px 16px', background: colorBgContainer, fontSize: 20 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger', onClick: () => setCollapsed(!collapsed),
      })}

      <div className={Style.rightMenu}>
        <span>您好，管理员 admin</span>
        <Dropdown menu={{ items, }} >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </Header>
  )
}
