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
      <ul>
        {listItems}
      </ul>
    );
  }
}
