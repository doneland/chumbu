import React from 'react';
import {Route, Redirect} from 'react-router';

import App from './containers/App';
import MainLayout from './containers/layouts/MainLayout.jsx';

export default (
  <Route component={App}>
    <Route component={MainLayout} path="/">
    </Route>
  </Route>
);
