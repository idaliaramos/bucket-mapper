import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 150
  }
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class DropDownComponent extends Component {
  state = {
    value: 'catergory'
  };

  handleChange = (event, index, value) => {
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    return (
      <form>
        <SelectField
          id="category"
          floatingLabelText="category"
          value={this.state.value}
          onChange={this.handleChange}>
          <MenuItem value="food" primaryText="Food" />
          <MenuItem value="outdoors" primaryText="Outdoors" />
          <MenuItem value="exploration" primaryText="City Exploration" />
          <MenuItem value="hikes" primaryText="Hikes" />
          <MenuItem value="lodging" primaryText="Where to Stay" />
        </SelectField>
        <br />
      </form>
    );
  }
}
