import React, { useState } from 'react';
import classNames from 'classnames';
import { Switch } from 'react-router-dom';

import Header from 'components/Header';
import MainNav from 'components/MainNav';
import Footer from 'components/Footer';

import IndexPage from 'containers/IndexPage';

import RouterInterceptor from 'utils/routerInterceptor';
import { ROUTER_INDEX } from 'utils/constants';

import AdminLayoutStyle from './AdminLayoutStyle';

const AdminLayout = () => {
  const [showLessMenu, handleShowLessMenu] = useState(false);
  const [hideMenu, handleHideMenu] = useState(false);

  return (
    <AdminLayoutStyle>
      <MainNav
        hideMenu={hideMenu}
        showLessMenu={showLessMenu}
        handleShowLessMenu={handleShowLessMenu}
      />
      <main
        className={classNames(
          showLessMenu ? 'showLessMenu' : '',
          hideMenu ? 'hideMenu' : '',
          'mainPage',
        )}
      >
        <Header hideMenu={hideMenu} handleHideMenu={handleHideMenu} />
        <div className="pageContent">
          <Switch>
            <RouterInterceptor
              path={ROUTER_INDEX}
              exact
              component={IndexPage}
            />
          </Switch>
        </div>
        <Footer />
      </main>
    </AdminLayoutStyle>
  );
};

export default AdminLayout;
