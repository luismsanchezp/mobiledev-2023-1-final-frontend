import React from 'react';
import { UserMenu, AdminMenu } from '../../components';
import { verifyToken } from '../../utils/jwt';

export const ClientLayout = (props) => {
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
        {props.children}
      </div>
    </div>
  )
}
