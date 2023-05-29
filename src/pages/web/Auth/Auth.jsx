import React, { useState } from 'react';
import { Tabs } from 'antd';
import { 
  LoginForm,
  RegisterForm
} from '../../../components';
import './Auth.scss';
import authImage from '../../../assets/authImage.jpg';
import loginLogo from '../../../assets/loginLogo.png';

export const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <div className='auth-back' style={{ backgroundImage: `url(${authImage})` }}>
      <div className='auth-card'>
        <div className='auth-logo'>
          <img
            className='auth-logo-img' 
          src={loginLogo} alt='Logo' />
        </div>
        <Tabs activeKey={activeTab} onChange={handleTabChange}>
          <Tabs.TabPane key="login" tab="Login">
            <LoginForm />
          </Tabs.TabPane>
          <Tabs.TabPane key="register" tab="Register">
            <RegisterForm />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}
