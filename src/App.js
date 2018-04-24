import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GenresPage from './components/GenresPage';
import LoginPage from './components/LoginPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/genres">Genres</Link></li>
            <li><Link to="/genres/new">Add Genre</Link></li>
          </ul>

          <Route exact path="/" component={LoginPage} />
          <Route path="/genres" component={GenresPage} />
        </div>
      </Router>
    );
  }
}
