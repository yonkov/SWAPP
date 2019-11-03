import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Switch, Route, Redirect } from 'react-router-dom';
import Episode from './Episode';
import Episodes from './Episodes';
import Characters from './Characters'
import Character from './Character';
import PrivateRoute from '../components/PrivateRoute';
import gql from 'graphql-tag.macro';

export const AUTHENTICATED_QUERY = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const Pages = () => {
  const { data } = useQuery(AUTHENTICATED_QUERY);
  
  return (
    <Switch>
      <PrivateRoute>
        <Route path="/episodes/:episodeId" component={Episode} />
        <Route path="/characters/:characterId" component={Character} />
        <Route path="/episodes" component={Episodes} exact />
        <Route path="/characters" component={Characters} exact />
        <Route path="/" exact component={() => <Redirect to="/episodes" />} />
      </PrivateRoute>
    </Switch>
  );
};

export default Pages;