import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Episode from './Episode';
import Episodes from './Episodes';
import Characters from './Characters'
import Character from './Character';

const Pages = () => {
  return (
    <Switch>
      <Route path="/episodes/:episodeId" component={Episode} />}
      <Route path="/characters/:characterId" component={Character} />}
      <Route path="/episodes" component={Episodes} exact />
      <Route path="/characters" component={Characters} exact />
      <Route path="/" exact component={() => <Redirect to="/episodes" />} />
    </Switch>
  );
};

export default Pages;
