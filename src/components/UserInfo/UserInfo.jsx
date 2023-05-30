import React from 'react';
import { Modal } from 'antd';
import { verifyToken } from '../../utils/jwt';

export const UserInfo = ({userInfo, showUser, setShowUser}) => {
  const accessToken = localStorage.getItem('token');
  const decodedToken = verifyToken(accessToken);
  let isAdmin = false;
  if (decodedToken !== null) {
    isAdmin = decodedToken.role === 'admin';
  }

  return (
    <Modal
        title='User Information'
        open={showUser}
        onCancel={() => setShowUser(false)}
        onOk={() => setShowUser(false)}
      >
        {!userInfo ? <p>No hay información</p> :
        <div>
            <p><strong>Name:</strong> {userInfo?.profile?.names}</p>
            <p><strong>Lastnames:</strong> {userInfo?.profile?.lastnames}</p>
            {isAdmin && (
                <div>
                <p><strong>Email:</strong> {userInfo?.email}</p>
                <p><strong>Gender:</strong> {userInfo?.profile?.gender}</p>
                <p><strong>Birthdate:</strong> {userInfo?.profile?.birthdate}</p>
                <p><strong>Gov ID Type:</strong> {userInfo?.profile?.govIdType}</p>
                <p><strong>Gov ID:</strong> {userInfo?.profile?.govId}</p>
                <p><strong>Phone:</strong> {userInfo?.profile?.phoneNumber}</p>
                <p><strong>State:</strong> {userInfo?.profile?.state}</p>
                <p><strong>City:</strong> {userInfo?.profile?.city}</p>
                <p><strong>Role:</strong> {userInfo?.role}</p>
                <p><strong>Active:</strong> {userInfo?.active ? 'Yes' : 'No'}</p>
                </div>
            )}
          </div>}
    </Modal>
  )
}
