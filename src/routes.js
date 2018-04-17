import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/HelloWorld/Home';
import About from '@/components/HelloWorld/About';
import Topics from '@/components/HelloWorld/Topics';

export const routes = [
  {
    path: '/',
    component: HelloWorld,
    routes: [{
      path: '/',
      exact: true,
      component: Home
    },{
      path: '/about',
      component: About
    },{
      path: '/topics',
      component: Topics
    }]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
export const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);