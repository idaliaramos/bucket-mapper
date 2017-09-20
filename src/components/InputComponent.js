import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

export default class InputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Add Place'
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };
  // console.log(this.props, "this.props")
  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
