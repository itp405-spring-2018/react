import React, { Component } from 'react';
import GenreList from './GenreList';
import { findAllGenres } from './../api';
import { Route, Link } from 'react-router-dom';
import GenreForm from './GenreForm';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genres: []
    };
  }

  async componentDidMount() {
    let genres = await findAllGenres();
    this.setState({ genres });
  }

  addGenre = (genre) => {
    this.setState({
      genres: [genre].concat(this.state.genres)
    });
  }

  render() {
    return (
      <div>
        <Link to="/genres/new">Add Genre</Link>
        <Route path="/genres/new" render={() => {
          return (
            <GenreForm addGenre={this.addGenre} />
          )
        }} />
        <GenreList genres={this.state.genres} />
      </div>
    );
  }
}
