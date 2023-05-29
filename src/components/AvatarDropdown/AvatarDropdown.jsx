import React from 'react'
import { Dropdown, Avatar, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { logOut } from '../../utils/jwt';
import './AvatarDropdown.scss';

export const AvatarDropdown = () => {

    const onClick = ({ key }) => {
        if (key === '2') {
            message.info(`Loggin out...`);
            logOut();
        }
        
    };

    const avatarItems = [
        {
            key: '1',
            label: (
                <>Ver Perfil</>
            ),
        },
        {
            key: '2',
            label: (
                <>Cerrar Sesion</>
            ),
        },
    ];

    return (
        <Dropdown
            menu={{
                items: avatarItems,
                onClick,
            }}
            placement="bottomRight"
            arrow
        >
            <Avatar size="large" icon={<UserOutlined />} />
        </Dropdown>
    )
}
