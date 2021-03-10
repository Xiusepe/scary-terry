import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../views/Home.view';
import Log from '../../views/Log.view';
import NotFoundPage from '../../views/NotFoundPage';
import CharacterDetailRouting from './CharacterDetailRoute';
import Navbar from '../../common/layout/navbar/Navbar';
import PrivateRoute from './AuthGuard';

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/log">
          <Log />
        </Route>

        <PrivateRoute exact path="/">
          <Home />
        </PrivateRoute>

        <PrivateRoute path="/character-detail">
          <CharacterDetailRouting />
        </PrivateRoute>

        <Route exact path="/404">
          <NotFoundPage></NotFoundPage>
        </Route>

        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
