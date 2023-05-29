import React from 'react';
import { Activity, Meetings } from '../../../components/AdminDashboard';
import './Home.scss';

export const Home = () => {
  const currentDate = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  return (
    <div className='home-dash'>
      <h1>{currentDate.toLocaleDateString(undefined, options)}</h1>
      <div className='home-dash-cards'>
        <Meetings />
        <Activity />
      </div>
    </div>
  )
}
