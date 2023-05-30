import React from 'react';
import { Modal, Button, message } from 'antd';
import { deleteUser } from '../../utils/delete';
import './UserDelete.scss';

const deleteUserById = async (userInfo) => {
  try {
    await deleteUser(userInfo?.id);
    message.success('User deleted successfully');
  } catch (error) {
    message.error('Error deleting user');
  }
};

export const UserDelete = ({userInfo, showDelete, setShowDelete, handleListChanges}) => {

  console.log(userInfo);
  return (
    <Modal
        title='User Information'
        open={showDelete}
        footer={null}
    >
      <div>
        <h1>Are you sure you want to delete this user?</h1>
        <div>
          <p><strong>Name:</strong> {userInfo?.profile?.names}</p>
          <p><strong>Lastnames:</strong> {userInfo?.profile?.lastnames}</p>
          <p><strong>Email:</strong> {userInfo?.email}</p>
          <p><strong>Role:</strong> {userInfo?.role}</p>
        </div>
        <div className='delete-btns'>
          <Button 
            danger
          onClick={async () => {
            await deleteUserById(userInfo);
            handleListChanges();
            setShowDelete(false);
          }}>Yes</Button>
          <Button onClick={() => setShowDelete(false)}>No</Button>
        </div>
      </div>
    </Modal>
  )
}
