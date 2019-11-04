import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Episode from './Episode';
import Episodes from './Episodes';
import Characters from './Characters'
import Character from './Character';
import Starship from './Starship'
import PrivateRoute from '../components/PrivateRoute';
import gql from 'graphql-tag.macro';


const Pages = () => {
  
  return (
    <Switch>
      <PrivateRoute>
        <Route path="/episodes/:episodeId" component={Episode} />
        <Route path="/characters/:characterId" component={Character} />
        <Route path="/starships/:starshipId" component={Starship} />
        <Route path="/episodes" component={Episodes} exact />
        <Route path="/characters" component={Characters} exact />
        <Route path="/" exact component={() => <Redirect to="/episodes" />} />
      </PrivateRoute>
    </Switch>
  );
};

export default Pages;