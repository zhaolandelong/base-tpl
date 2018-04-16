import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import { routes, RouteWithSubRoutes } from '@/routes';
import HelloWorld from '@/components/HelloWorld';
import './style.less';

ReactDOM.render(
  <Router>
    <div>
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>,
  document.getElementById('app')
);
