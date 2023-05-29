import { Routes, Route } from 'react-router-dom';
import {
    AuthLayout
} from '../layouts';
import {
    Auth
} from '../pages/web';

export const WebRouter = () => {
    const loadLayout = (Layout, Page) => {
        return (
            <Layout>
                <Page />
            </Layout>
        );
    };
    return (
        <Routes>
            <Route path="/signin" element={loadLayout(AuthLayout, Auth)} />
        </Routes>
    );
};