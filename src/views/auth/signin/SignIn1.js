import React from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

import logoDark from '../../../assets/images/logo-dark.png';
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import FirebaseLogin from './FirebaseLogin';
//import JWTLogin from './JWTLogin';
//import Auth0Login from './Auth0Login';

const Signin1 = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <Card className="borderless">
            <Card.Body>
              <img src={logoDark} alt="" className="img-fluid mb-4" />
              <FirebaseLogin />
              <p className="mb-2 text-muted">
                パスワードをお忘れですか？{ ' ' }
                <br />
                <NavLink to="/auth/reset-password-1" className="f-w-400">
                  パスワードを変更する
                </NavLink>
              </p>
              <Alert variant="primary" className="text-left mt-3">
                ユーザーネームdemo:
                <CopyToClipboard text="demo@gmail.com">
                  <Button variant="outline-primary mx-2 mb-2" as={Link} to="#" className="badge">
                    {' '}
                    <i className="fa fa-user mr-1" /> demo@gmail.com{' '}
                  </Button>
                </CopyToClipboard>
                <br />
                パスワードdemo:
                <CopyToClipboard text="123456">
                  <Button variant="outline-primary mx-2" as={Link} to="#" className="badge">
                    {' '}
                    <i className="fa fa-lock mr-1" /> 123456{' '}
                  </Button>
                </CopyToClipboard>
              </Alert>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signin1;
