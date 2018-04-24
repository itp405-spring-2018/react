import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <Link to="/logout">Logout</Link>
      );
    } else {
      return (
        <Link to="/">Login</Link>
      );
    }
  }
}
