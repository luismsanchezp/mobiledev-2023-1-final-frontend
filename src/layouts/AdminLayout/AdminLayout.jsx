import React from 'react';
import { AdminMenu, AdminMenuSider, UserMenu } from '../../components';
import './AdminLayout.scss';
import { verifyToken } from '../../utils/jwt';

export const AdminLayout = (props) => {
  const accessToken = localStorage.getItem('token');
  const decodedToken = verifyToken(accessToken);
  let isAdmin = false;
  if (decodedToken !== null) {
    isAdmin = decodedToken.role === 'admin';
  }
  return (
    <div className="layout-canva">
      {
        isAdmin ? <AdminMenu/> : <UserMenu/>
      }
      <div className="layout-container">
        <AdminMenuSider/>
        <div className="layout-scroll">
          {props.children}
        </div>
      </div>
    </div>
  )
}
