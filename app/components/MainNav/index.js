import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ROUTER_INDEX } from 'utils/constants';

import MainNavStyle from './MainNavStyle';

const MainNav = ({ hideMenu, showLessMenu, handleShowLessMenu }) => (
  <MainNavStyle>
    <div
      className={classNames(
        showLessMenu ? 'showLessMenu' : '',
        hideMenu ? 'hideMenu' : '',
        'sideMenuWrapper',
      )}
    >
      <Link to={ROUTER_INDEX} className="mainNavBranch">
        <i className="fas fa-shield-alt" />
        {!showLessMenu && <span>SRS</span>}
      </Link>

      <div className="sidebar-divider" />

      <div className="sidebar-divider" />

      <div className="toggleMenuBox">
        <button type="button" onClick={() => handleShowLessMenu(!showLessMenu)}>
          <i
            className={classNames(
              showLessMenu ? 'fa-chevron-right' : 'fa-chevron-left',
              'fas',
            )}
          />
        </button>
      </div>
    </div>
  </MainNavStyle>
);

MainNav.propTypes = {};

export default MainNav;
