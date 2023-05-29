import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, AdminCheck } from "./context";
import {
  AuthLayout,
  ClientLayout,
  AdminLayout
} from './layouts';
import {
  Auth,
  Home,
  Profile,
} from './pages/web';
import {
  Users,
  Companies
} from './pages/admin';

function App() {
  const loadLayout = (Layout, Page) => {
    return (
        <Layout>
            <Page />
        </Layout>
    );
};
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthProvider/>}>
          <Route path="/" element={loadLayout(AdminLayout, Home)} />
          <Route path="/profile" element={loadLayout(ClientLayout, Profile)} />
          <Route element={<AdminCheck/>}>
            <Route path="/admin/users" element={loadLayout(AdminLayout, Users)} />
            <Route path="/admin/management/companies" element={loadLayout(AdminLayout, Companies)} />
          </Route>
        </Route>
        <Route path="/signin" element={loadLayout(AuthLayout, Auth)} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
