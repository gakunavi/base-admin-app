import React, { Suspense, Fragment, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import GuestGuard from './components/Auth/GuestGuard';
import AuthGuard from './components/Auth/AuthGuard';

import { BASE_URL } from './config/constant';

const renderRoutes = (routes = []) => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Element = route.element;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            element={
              <Guard>
                <Layout>{route.routes ? renderRoutes(route.routes) : <Element props={true} />}</Layout>
              </Guard>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export const routes = [
  {
    exact: true,
    guard: GuestGuard,
    path: '/auth/signin-1',
    element: lazy(() => import('./views/auth/signin/SignIn1'))
  },
  {
    exact: true,
    path: '/auth/signup-1',
    element: lazy(() => import('./views/auth/signup/SignUp1'))
  },
  {
    exact: true,
    path: '/auth/reset-password-1',
    element: lazy(() => import('./views/auth/reset-password/ResetPassword1'))
  },
  {
    exact: true,
    path: '/auth/profile-settings',
    element: lazy(() => import('./views/auth/ProfileSettings'))
  },
  {
    exact: true,
    path: '/auth/tabs-auth',
    element: lazy(() => import('./views/auth/TabsAuth'))
  },
  {
    path: '*',
    layout: AdminLayout,
    guard: AuthGuard,
    routes: [
      {
        exact: 'true',
        path: '/dashboard',
        element: lazy(() => import('./views/extra/Dashboard'))
      },
      {
        exact: true,
        path: '/user-management',
        element: lazy(() => import('./views/extra/UserManagement/UserManagement'))
      },
      {
        exact: true,
        path: '/diploma-management',
        element: lazy(() => import('./views/extra/Diploma/DiplomaManagement'))
      },
      {
        exact: true,
        path: '/diploma-management-create',
        element: lazy(() => import('./views/extra/Diploma/DiplomaManagementCreate'))
      },
      {
        exact: true,
        path: '/chat',
        element: lazy(() => import('./views/extra/Chat/Chat'))
      },
      {
        exact: true,
        path: '/sample-page',
        element: lazy(() => import('./views/extra/SamplePage'))
      },
      {
        path: '*',
        exact: true,
        element: () => <Navigate to={BASE_URL} />
      }
    ]
  }
];

export default renderRoutes;
