import React, { useState } from 'react';
import './App.css';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import OrderTable from "./component/OrderTable";
import TradeTable from "./component/TradeTable";
import {  Route, Link, HashRouter as Router , Routes} from "react-router";
import fontendApi from "./fontend-api/api";
fontendApi

const { Header, Sider, Content } = Layout;



function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <div className="app-container">
        <Router>
      <div className="menu">
       <Menu

          mode="inline"
          defaultSelectedKeys={['1']}

          items={[
            {
              key: '1',
              icon: <UserOutlined />,
                label: (<Link to="/order">nav 1</Link>),
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: (<Link to="/trade">nav 2</Link>),
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: (<Link to="/trade">nav 3</Link>),
            },
          ]}
        />
      </div>
      <div className="content">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => {
                fontendApi.pingPoin({name:'haolifeng', message:'hello, world'}, (error, result)=> {
                    console.log('error: ', error);
                    console.log('result: ', result);
                })
            }}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
               <Routes>
                   <Route path="/order" element={<OrderTable/>}/>
                   <Route path={"/trade"} element={<TradeTable/>}/>
               </Routes>


        </Content>
      </div>
        </Router>
    </div>
  );
}

export default App;