import React, { Component } from 'react';

export default class extends Component {
  render() {
    let listItems = this.props.genres.map((genre) => {
      return (
        <li key={genre.GenreId}>
          {genre.Name}
        </li>
      );
    });

    return (
      <div>
        <span>{this.props.genres.length} Genre(s)</span>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
}
