import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireAuth from './components/require_auth';
import App from './components/app';
import Resources from './components/resources';


export default (
  <Route path='/' component={ App }>
    <Route path='resources' component={ requireAuth(Resources) } />
  </Route>
)
