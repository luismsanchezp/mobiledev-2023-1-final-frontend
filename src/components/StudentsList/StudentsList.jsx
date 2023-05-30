import React, { useState, useEffect } from 'react';
import { GeneralList } from '../GeneralList';

import { getUsers } from '../../utils/select';

import './StudentsList.scss';

export const StudentsList = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(response => {
      setUsers(response);
    });
  }, []);

  const handleListChanges = () => {
    getUsers().then(response => {
      setUsers(response);
    });
  };

  return (
    <div className='comp-content'>
        <div className='comp-title'>
            <h2>Listado</h2>
        </div>
        <div className='comp-list'>
            <GeneralList list={users} handleListChanges={handleListChanges}/>
        </div>
    </div>
  )
}
