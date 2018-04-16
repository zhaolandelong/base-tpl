import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { RouteWithSubRoutes } from '@/routes';
import { formatDate } from '@/util';
import logo from '@/assets/logo.jpg';
import Home from './Home';
import Topics from './Topics';
import './style.less';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cutdown: new Date()
    }
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({ cutdown: new Date() });
    }, 1000);
  }

  render() {
    return <div className="hlwd">
      <div className="hlwd-top">
        <img src={logo} alt="logo" />
        <h1>Hello World</h1>
        <p>Time now is {formatDate(this.state.cutdown)}</p>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      {this.props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  }
}
