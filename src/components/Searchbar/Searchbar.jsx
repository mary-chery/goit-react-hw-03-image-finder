import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;
    this.props.onSearch(searchQuery);
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleFormSubmit}>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
        </form>
      </header>
    );
  }
}
