import { Navigate, Outlet } from 'react-router-dom';
import { verifyToken } from '../utils/jwt';

export const AuthProvider = () => {

  const accessToken = localStorage.getItem('token');
  const decodedToken = verifyToken(accessToken);

  return decodedToken !== null ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" replace />
  );
};

export const AdminCheck = () => {

  const accessToken = localStorage.getItem('token');
  const decodedToken = verifyToken(accessToken);
  let isAdmin = false;
  if (decodedToken !== null) {
    isAdmin = decodedToken.role === 'admin';
  }

  return isAdmin ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace />
  );
};
