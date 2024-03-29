import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ConfigContext } from '../../../../contexts/ConfigContext';
import * as actionType from '../../../../store/actions';

const Layout = () => {
  const configContext = useContext(ConfigContext);
  const { layoutType } = configContext.state;
  const { dispatch } = configContext;

  return (
    <React.Fragment>
      <h6>レイアウト</h6>
      <div className="theme-color layout-type">
        <Link
          to="#"
          onClick={() => dispatch({ type: actionType.LAYOUT_TYPE, layoutType: 'menu-dark' })}
          title="Default Layout"
          className={layoutType === 'menu-dark' ? 'active' : ''}
          data-value="menu-dark"
        >
          <span />
          <span />
        </Link>
        <Link
          to="#"
          onClick={() => dispatch({ type: actionType.LAYOUT_TYPE, layoutType: 'menu-light' })}
          title="Light"
          className={layoutType === 'menu-light' ? 'active' : ''}
          data-value="menu-light"
        >
          <span />
          <span />
        </Link>
        <Link
          to="#"
          onClick={() => dispatch({ type: actionType.LAYOUT_TYPE, layoutType: 'dark' })}
          title="Dark"
          className={layoutType === 'dark' ? 'active' : ''}
          data-value="dark"
        >
          <span />
          <span />
        </Link>
        <Link
          to="#"
          onClick={() => dispatch({ type: actionType.RESET })}
          title="Reset"
          className={layoutType === 'reset' ? 'active' : ''}
          data-value="reset"
        >
          デフォルトに戻す
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Layout;
