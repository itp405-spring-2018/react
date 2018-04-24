import React, { Component } from 'react';
import { createGenre } from './../api';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGenreName: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      newGenreName: e.target.value
    });
  }

  createGenre = async (e) => {
    e.preventDefault();
    let genre = await createGenre(this.state.newGenreName);
    this.setState({ newGenreName: '' });
    this.props.addGenre(genre);
  }

  render() {
    return (
      <form onSubmit={this.createGenre}>
        <input
          type="text"
          value={this.state.newGenreName}
          onChange={this.handleChange} />
        <button type="submit">Add Genre</button>
      </form>
    );
  }
}
