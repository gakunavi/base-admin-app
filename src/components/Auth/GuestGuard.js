import React from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const GuestGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/user-management" />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default GuestGuard;
