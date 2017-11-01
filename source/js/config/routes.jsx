import React from 'react';
import { Route, Switch } from 'react-router-dom';

  // Components
import Home from 'views/Home/index.jsx';
import NotFound from 'views/NotFound';

const publicPath = '/';

  // Routes
export const routeCodes = {
  HOME:       publicPath,
};

export default () => (
  <Switch>
    <Route exact path={ routeCodes.HOME } component={ Home } />
    <Route path='*' component={NotFound} />
  </Switch>
);
