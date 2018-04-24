import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import GenresPage from './components/GenresPage';
import LoginPage from './components/LoginPage';
import createBrowserHistory from 'history/createBrowserHistory';
import { logout } from './auth';
import AuthButton from './components/AuthButton';

const history = createBrowserHistory();

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

  handleLogout = async () => {
    this.setState({ loggedIn: false });
    await logout();
    history.push('/');
  }

  render() {
    return (
      <Router history={history}>
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
        </div>
      </Router>
    );
  }
}
