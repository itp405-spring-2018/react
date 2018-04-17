import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GenreList from './GenreList';
import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: [],
      newGenreName: ''
    };
  }
  async componentDidMount() {
    let response = await axios.get(`${ENDPOINT}/api/genres`);
    let genres = response.data;
    this.setState({
      genres
    });
  }
  handleChange = (e) => {
    this.setState({
      newGenreName: e.target.value
    });
  }
  createGenre = async (e) => {
    e.preventDefault();
    let name = this.state.newGenreName;
    let response = await axios.post(`${ENDPOINT}/api/genres`, { name });

    let newGenre = response.data;
    this.setState({
      genres: this.state.genres.concat(newGenre),
      newGenreName: ''
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <main>
          <span>{this.state.genres.length} Genre(s)</span>

          <form onSubmit={this.createGenre}>
            <input
              type="text"
              value={this.state.newGenreName}
              onChange={this.handleChange} />
            <button type="submit">Add Genre</button>
          </form>

          <GenreList genres={this.state.genres} />
        </main>
      </div>
    );
  }
}

export default App;
