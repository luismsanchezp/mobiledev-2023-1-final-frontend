import { List, Button } from 'antd';
import React, { useState } from 'react';
import { UserInfo } from '../UserInfo';
import { UserDelete } from '../UserDelete';
import { UserEdit } from '../UserEdit';
import './GeneralList.scss'

export const GeneralList = ({list, handleListChanges}) => {
  const [showUser, setShowUser] = useState(false);
  const [user, setUser] = useState({});
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div className='comp-list'>
    <List
      size="large"
      bordered
      dataSource={list}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
        align: 'center',
      }}
      renderItem={(item) => 
      <List.Item>
        <div className='meetings-card-item'>
            <h3>{item.profile.names+" "}{item.profile.lastnames}</h3>
            <p>{"Email: "+item.email}</p>
            <p>{"State: "+item.profile.state}</p>
            <p>{"City: "+item.profile.city}</p>
            <p>{"Phone: "+item.profile.phoneNumber}</p>
        </div>
        <div className='meetings-card-bttns'>
          <Button 
          type="primary" 
          size="large" 
          onClick={() => {
            setUser(item);
            setShowUser(true);
          }}
          className='meetings-card-show'>Ver</Button>
          <Button 
          type="primary" 
          size="large" 
          onClick={() => {
            setUser(item);
            setShowEdit(true);
          }}
          className='meetings-card-edit'>Editar</Button>
          <Button 
          type="primary" 
          size="large" 
          onClick={() => {
            setUser(item);
            setShowDelete(true);
          }}
          className='meetings-card-delete'>Eliminar</Button>
        </div>
      </List.Item>
    }
    />
    <UserInfo userInfo={user} showUser={showUser} setShowUser={setShowUser}/>
    <UserDelete userInfo={user} showDelete={showDelete} setShowDelete={setShowDelete} handleListChanges={handleListChanges}/>
    <UserEdit userInfo={user} showEdit={showEdit} setShowEdit={setShowEdit} handleListChanges={handleListChanges}/>
  </div>
  );
}
