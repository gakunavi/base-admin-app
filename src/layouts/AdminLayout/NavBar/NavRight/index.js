import React, { useContext, useState } from 'react';
import { ListGroup, Dropdown, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ChatList from './ChatList';
import { ConfigContext } from '../../../../contexts/ConfigContext';
import useAuth from '../../../../hooks/useAuth';

import avatar1 from '../../../../assets/images/user/メイン正方形.jpg';

const NavRight = () => {
  const configContext = useContext(ConfigContext);
  const { logout } = useAuth();
  const { rtlLayout } = configContext.state;

  const [listOpen, setListOpen] = useState(false);

  const handleLogout = async () => {
    try {
      //handleClose();
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <ListGroup as="ul" bsPrefix=" " className="navbar-nav ml-auto">
        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown align={!rtlLayout ? 'end' : 'start'} className="drp-user">
            <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic">
              <img src={ avatar1 } className="img-radius wid-40" alt="User Profile" style={{ marginRight: 'auto', marginLeft: '10px' }} />
              <span style={{ marginRight: 'auto', marginLeft: '10px' }}>株式会社GakuNavi</span>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="profile-notification">
              <div className="pro-head">
                <img src={avatar1} className="img-radius" alt="User Profile" />
                <span>株式会社GakuNavi</span>
                <Link to="#" className="dud-logout" title="Logout">
                  <i className="feather icon-log-out" />
                </Link>
              </div>
              <ListGroup as="ul" bsPrefix=" " variant="flush" className="pro-body">
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link to="#" className="dropdown-item">
                    <i className="feather icon-settings" /> Settings
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link to="#" className="dropdown-item">
                    <i className="feather icon-user" /> Profile
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" ">
                  <Link to="#" className="dropdown-item" onClick={handleLogout}>
                    <i className="feather icon-log-out" /> Logout
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Dropdown.Menu>
          </Dropdown>
        </ListGroup.Item>
      </ListGroup>
      <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
    </React.Fragment>
  );
};

export default NavRight;
