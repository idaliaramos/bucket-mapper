import SearchBar from 'material-ui-search-bar';
import React from 'react';

export default class SearchBarComponent extends React.Component {
  _handleClick = event => {
    let value = event.target.value;
    console.log(value, 'this is the value');
  };
  render() {
    return (
      <SearchBar
        onSubmit={this._handleClick}
        onChange={() => console.log(this.value)}
        onRequestSearch={() => console.log(this.value)}
        style={{
          margin: '0 auto',
          maxWidth: 800
        }}
      />
    );
  }
}
