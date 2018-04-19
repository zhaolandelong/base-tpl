import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { routes, RouteWithSubRoutes } from '@/routes';
import './style.less';

ReactDOM.render(
  <Router>
    <div>
      {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
    </div>
  </Router>,
  document.getElementById('app'),
);
