import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import CharacterDetail from '../../views/CharacterDetail.view';

function CharacterDetailRouting() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route
  let { path } = useRouteMatch();

  return (
    <Switch>
      {/* nested routing example */}
      <Route path={`${path}/:characterId`}>
        <CharacterDetail />
      </Route>
    </Switch>
  );
}

export default CharacterDetailRouting;
