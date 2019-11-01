import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Episodes from '../Episodes';

const Pages = () => {
  return (
    <Switch>
      <Route path="/episodes" component={Episodes} exact />
      <Route path="/" exact component={() => <Redirect to="/episodes" />} />
    </Switch>
  );
};

export default Pages;
