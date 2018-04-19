import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RouteWithSubRoutes } from '@/routes';
import { formatDate } from '@/util';
import logo from '@/assets/logo.jpg';
import './style.less';

export default class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cutdown: new Date(),
    };
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({ cutdown: new Date() });
    }, 1000);
  }

  render() {
    const { routes } = this.props;
    return (
      <div className="hlwd">
        <div className="hlwd-top">
          <img src={logo} alt="logo" />
          <h1>Hello World</h1>
          <p>Time now is {formatDate(this.state.cutdown)}</p>
        </div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        {routes.map(route => <RouteWithSubRoutes key={route.path} {...route} />)}
      </div>);
  }
}
