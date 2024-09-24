/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import RouterInterceptor from 'utils/routerInterceptor';

import AdminLayout from 'layouts/AdminLayout';
import ScrolToTop from 'components/ScrollToTop';

import { ROUTER_LOGIN, ROUTER_HOME, ROOT_URI } from 'utils/constants';

import Login from 'containers/Login/Loadable';
import Home from 'containers/Home';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import reducer from './reducer';
import saga from './saga';

export default function App() {
  useInjectReducer({ key: 'global', reducer });
  useInjectSaga({ key: 'global', saga });
  console.log('ROOT_URI: ', ROOT_URI);

  return (
    <div>
      <Helmet titleTemplate="Test" defaultTitle="Test">
        <meta name="description" content="Test" />
      </Helmet>
      <ScrolToTop />

      <Switch>
        <Route path="/" exact component={Login} />
        <Route path={ROUTER_HOME} exact component={Home} />
        <Route path={ROUTER_LOGIN} exact component={Login} />
        <RouterInterceptor path="/in" component={AdminLayout} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
