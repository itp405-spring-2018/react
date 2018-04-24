import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <button onClick={this.props.onLogout}>Logout</button>
      );
    } else {
      return (
        <Link to="/">Login</Link>
      );
    }
  }
}
