import React, { Component } from 'react';

export default class BookList extend Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.titile}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}
