import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from './../auth';

export default class extends Component {
  componentDidMount() {
    logout();
    this.props.onLogout();
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}
