import React, { Component } from 'react';
// import Paper from 'material-ui/Paper';
// import InputComponent from '../InputComponent';
import TextField from 'material-ui/TextField';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import AddButtonComponent from '../AddButtonComponent';
import { blue500 } from 'material-ui/styles/colors';

const style = {
  height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};
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
export default class DestinationFormComponent extends Component {
  static defaultProps = {
    onSaveDestination: () => {}
  };
  _handleClickOnSaveTitle = event => {
    event.preventDefault();
    // const { onSaveDestination } = this.props;
    let name = document.getElementById('destinationName').value;
    if (!name) {
      event.preventDefault();
      window.alert('please enter a location');
      return;
    }
    this.props.onSaveDestination({ name });

    document.form.reset();
  };
  render() {
    // console.log('this is in form componenet', destinationCar);
    return (
      <form name="form" style={style}>
        <TextField
          id="destinationName"
          required
          // errorText="This field is required."
          name="destinationName"
          // value={this.state.title || ''}
          floatingLabelText="Enter Destination Name"
          floatingLabelStyle={styles.floatingLabelStyle}
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        />
        <div>
          <RaisedButton
            label="Add"
            primary={true}
            onClick={this._handleClickOnSaveTitle}
          />
        </div>
      </form>
    );
  }
}
// export default DestinationFormComponent;
