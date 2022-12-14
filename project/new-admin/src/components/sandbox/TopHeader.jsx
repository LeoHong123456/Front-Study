import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Layout, Dropdown, message, Space, Avatar  } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';

export default function TopHeader() {
  const { Header } = Layout;

  const [collapsed, setCollapsed] = useState(false);

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '登出',
      key: '3',
      icon:<LogoutOutlined />,
      danger:true,
    },
  ];

  return (
    <Header className="site-layout-background" style={{ padding: '0px 0px 0px 16px', backgroundColor: '#fff' }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}

      <div style={{ float: 'right', marginRight:'10px'}}>
        <span style={{display:'inline-block' ,paddingRight:'20px'}}>欢迎：admin</span>
        <Dropdown menu={{ items, onClick,}}>
           <a onClick={(e) => e.preventDefault()}>
             <Space>
              <Avatar size='large' icon={<UserOutlined />} />
               <DownOutlined />
             </Space>
           </a>
        </Dropdown>
      </div>
    </Header>
  )
}
