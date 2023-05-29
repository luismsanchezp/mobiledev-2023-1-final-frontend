import { Routes, Route } from 'react-router-dom';
import { 
    AdminLayout
} from '../layouts';
import {
    Users
} from '../pages/admin';

export const AdminRouter = () => {
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );
    };
    return (
        <Routes>
            <Route path="/users" element={loadLayout(AdminLayout, Users)} />
        </Routes>
    );
};
