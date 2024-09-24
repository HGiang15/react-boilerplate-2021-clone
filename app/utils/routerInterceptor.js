import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RouterInterceptor = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('access-token');
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default RouterInterceptor;
