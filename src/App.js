import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GenresPage from './components/GenresPage';
import LoginPage from './components/LoginPage';
import AuthButton from './components/AuthButton';
import Logout from './components/Logout';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  handleSuccessfulLogin = () => {
    this.setState({ loggedIn: true });
  }

  handleLogout = () => {
    this.setState({ loggedIn: false });
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <AuthButton
                isLoggedIn={this.state.loggedIn}
                onLogout={this.handleLogout} />
            </li>
            <li><Link to="/genres">Genres</Link></li>
          </ul>

          <Route exact path="/" render={(props) => {
            return (
              <LoginPage {...props} onLogin={this.handleSuccessfulLogin} />
            );
          }} />
          <Route path="/genres" component={GenresPage} />
          <Route path="/logout" render={() => {
            return (
              <Logout onLogout={this.handleLogout} />
            );
          }} />
        </div>
      </Router>
    );
  }
}
