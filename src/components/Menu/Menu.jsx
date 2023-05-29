import React from 'react';
import { Menu as AntMenu, Badge, Avatar } from 'antd';
import {
  BellOutlined
} from '@ant-design/icons';
import { AvatarDropdown } from '../AvatarDropdown';
import logoUam from '../../assets/logoUam.png';
import './menu.scss';

export const Menu = ({ items, location, handleClick }) => {
    return (
        <header className="full-width-menu">
          <div className="logo">
            <img className='logo-navbar' src={logoUam} alt="logo" />
          </div>
          <AntMenu 
            theme="dark" 
            mode="horizontal"
            className='menu'
            items={items.map((item) => {
              return {
                ...item,
                onClick: handleClick,
            };
            })}
            selectedKeys={[location.pathname]}
          />
          <div className="right-menu">
            <Badge dot>
              <BellOutlined style={{ fontSize: '20px', color: '#fff' }} />
            </Badge>
            <AvatarDropdown />
          </div>
        </header>
    );
  };