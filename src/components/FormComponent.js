import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';

import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  errorStyle: {
    color: blue500
  },
  underlineStyle: {
    borderColor: blue500
  },
  floatingLabelStyle: {
    color: blue500
  },
  floatingLabelFocusStyle: {
    color: blue500
  }
};
const style = {
  // height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'block'
};

export default class FormComponent extends Component {
  static defaultProps = {
    form: {},
    onSave: () => {}
  };

  constructor(props) {
    super(props);
    const { form } = this.props;
    this.state = {
      url: form.url,
      title: form.title,
      body: form.body
    };
  }
  _handleClickOnSave = event => {
    event.preventDefault();
    const { onSave } = this.props;
    let title = document.getElementById('ActivityName').value;
    let description = document.getElementById('Description').value;
    let url = document.getElementById('Url').value;
    let input = { title: title, description: description, url: url };
    console.log(title, description, url);
    console.log('these are the props', this.props);
    onSave({ title, description, url });
  };

  render() {
    return (
      <form style={style}>
        <TextField
          id="ActivityName"
          // value={this.state.title || ''}
          floatingLabelText="Enter Activity Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <br />
        <br />
        <TextField
          // value={this.state.description || ''}
          id="Description"
          hintText="Enter a description, what will you do and see?."
        />
        <br />
        <TextField
          id="Url"
          // value={this.state.url || ''}
          floatingLabelText="Add Url"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <div>
          <RaisedButton
            label="Add"
            primary={true}
            onClick={this._handleClickOnSave}
          />
        </div>
      </form>
    );
  }
}
