import { Menu } from '../Menu';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserMenu = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate(e.key);
      };

    const items = [
        { key: '/', label: 'Dashboard' },
        { key: '/profile', label: 'Profile' },
    ];
    
    return (
        <Menu items={items} location={location} handleClick={handleClick} />
    );
}