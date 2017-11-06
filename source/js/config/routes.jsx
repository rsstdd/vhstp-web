import React from 'react';
import { Route, Switch } from 'react-router-dom';

  // Components
import Home from 'views/Home/index.jsx';
import NotFound from 'views/NotFound/index.jsx';
import Dashboard from 'views/Dashboard/index.jsx';
import authRoute from './../components/HOC/Authentication.jsx'

const publicPath = '/';

  // Routes
export const routeCodes = {
  HOME:         publicPath,
  DASHBOARD: `${publicPath}dashboard`,
};

export default () => (
  <Switch>
    <Route exact path={routeCodes.HOME} component={Home} />
    <Route exact path={routeCodes.DASHBOARD} component={authRoute(Dashboard)} />
    <Route path='*' component={NotFound} />
  </Switch>
);
