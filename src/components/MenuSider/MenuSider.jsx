import React from 'react';
import { Layout, Menu } from 'antd';
import './MenuSider.scss';
const { Sider } = Layout;

export const MenuSider = ({items, location}) => {
  return (
    <Sider
      className='sider'
      width={200}
    >
      <Menu
        className='menu-sider'
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        items={items}
      />
    </Sider>
  )
}
