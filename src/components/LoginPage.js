import React, { Component } from 'react';
import { attempt } from './../auth';

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  login = async (e) => {
    e.preventDefault();
    let { username, password } = this.state;
    try {
      await attempt(username, password);
      this.props.onLogin();
      this.props.history.push('/genres');
    } catch (e) {
      this.setState({ error: 'Invalid Credentials' });
    }
  }

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
        </div>
        <button type="submit">Login</button>
        {this.state.error}
      </form>
    );
  }
}
