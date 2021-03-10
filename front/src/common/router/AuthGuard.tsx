import React, { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';

export interface PrivateRouteProps {
  children: ReactNode;
  path: string;
  exact?: boolean;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { children, ...rest } = props;

  const isLoged = window.sessionStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/log',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
