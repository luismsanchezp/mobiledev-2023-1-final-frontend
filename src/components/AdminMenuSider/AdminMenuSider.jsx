import { MenuSider } from "../MenuSider";
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

export const AdminMenuSider = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.key);
  };

  const dashboard = [
    {
      key: '/',
      icon: <LaptopOutlined />,
      label: 'Notifications',
      onClick: handleClick,
    },
  ];

  const management = [
    {
      key: '/admin/management/students',
      icon: <LaptopOutlined />,
      label: 'Students',
      onClick: handleClick,
    },
  ];

  const selectItems = () => {
    if (location.pathname === '/admin/management/companies') {
      return management;
    }
    if (location.pathname === '/admin/management/students') {
      return management;
    }
    if (location.pathname === '/') {
      return dashboard;
    }
    return [];
  }
  return (
      <MenuSider items={selectItems()} location={location} />
  )
}
