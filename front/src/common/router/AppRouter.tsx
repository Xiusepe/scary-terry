import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../views/Home.view';
import Log from '../../views/Log.view';
import CharacterDetailRouting from './CharacterDetailRoute';
import Navbar from '../../common/layout/navbar/Navbar';

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

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/character-detail">
          <CharacterDetailRouting />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
