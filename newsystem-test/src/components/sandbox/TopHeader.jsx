import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout, theme, Dropdown, Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import Style from "./css/TopHeader.module.scss";

const { Header } = Layout;
export default function TopHeader() {
  const { token: { colorBgContainer }} = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate()
  const items = [
    {
      label: <span>个人资料</span>,
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: "退出系统",
      key: "1",
      danger: true,
      disabled: false,
      onClick: ()=>{
        localStorage.removeItem("token")
        navigate('/login',{replace:true})
        console.log(useLocation)  
      }
    },
  ];

  return (
    <Header style={{padding: "0px 16px",background: colorBgContainer,fontSize: 20}}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: () => setCollapsed(!collapsed),
      })}
      <div className={Style.rightMenu}>
        <span className={Style.userHint}>您好，管理员 admin</span>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size="large" icon={<UserOutlined />} />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
}
