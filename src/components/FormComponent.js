import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import FlatButton from 'material-ui/FlatButton';

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
  margin: 0,
  // textAlign: 'center',
  display: 'block'
};
// const initialState = {
//   location: '',
//   url: '',
//   description: '',
//   category: ''
// };

export default class FormComponent extends Component {
  static defaultProps = {
    onSaveTripData: () => {},
    onClickOnSave: () => {},
    onUpdateTripData: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      location: '',
      url: '',
      description: '',
      category: ''
    };
  }
  _handleClickOnSave = event => {
    event.preventDefault();
    const { onSaveTripData } = this.props;

    let tripData = {
      location: this.state.location,
      description: this.state.description,
      url: this.state.url,
      category: this.state.category
    };
    console.log('i am in the handleClickOnSave');
    onSaveTripData(tripData);

    this.setState({
      location: '',
      url: '',
      description: '',
      category: ''
    });
    // console.log(this.ste, 'this is the state');
  };

  _handleLocationChange = (event, value) => {
    this.setState({ location: value });
  };
  _handleUrlChange = (event, value) => {
    this.setState({ url: value });
  };
  _handleBodyChange = (event, value) => {
    this.setState({ description: value });
  };
  _handleCategoryChange = (event, index, value) => {
    this.setState({ category: value });
  };
  _handleClickOnUpdate = event => {
    event.preventDefault();
    let $form = event.target;
    let location = $form.location.value;
    let description = $form.description.value;
    let url = $form.url.value;
    let id = this.props.adventureCard.id;
    const { onUpdateTripData } = this.props;
    let tripData = {
      description: description,
      location: location,
      url: url
    };
    // var frm = document.getElementsByName('form');
    onUpdateTripData(id, tripData);
    // frm.reset();
    // document.form.reset();
    // document.getElementById('form').reset();
    this.setState({
      location: '',
      url: '',
      description: '',
      category: ''
    });
  };
  _onHandleCancel = event => {
    event.preventDefault();
    this.onCancel();
  };

  render() {
    return (
      <form
        name="form"
        id="form"
        style={style}
        onSubmit={
          this.props.update === true
            ? this._handleClickOnUpdate
            : this._handleClickOnSave
        }>
        {this.props.adventureCard
          ? <TextField
              id="location"
              onChange={this._handleLocationChange}
              defaultValue={this.props.adventureCard.location}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
          : <TextField
              id="location"
              required
              value={this.state.location}
              onChange={this._handleLocationChange}
              floatingLabelText="Enter Location"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />}
        <br />
        {this.props.adventureCard
          ? <TextField
              id="url"
              onChange={this._handleUrlChange}
              defaultValue={this.props.adventureCard.url}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
          : <TextField
              id="url"
              value={this.state.url}
              onChange={this._handleUrlChange}
              floatingLabelText="Enter url"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />}
        <br />
        {this.props.adventureCard
          ? <TextField
              id="description"
              onChange={this._handleBodyChange}
              defaultValue={this.props.adventureCard.description}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              multiLine={true}
              rows={2}
              value={this.state.description}
            />
          : <TextField
              id="description"
              onChange={this._handleBodyChange}
              value={this.state.description}
              //change
              floatingLabelText="Enter Description"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />}
        <SelectField
          multiple={true}
          id="category"
          floatingLabelText="category"
          value={this.state.category}
          onChange={this._handleCategoryChange}>
          <MenuItem value="food" primaryText="Food" />
          <MenuItem value="outdoors" primaryText="Outdoors" />
          <MenuItem value="exploration" primaryText="City Exploration" />
          <MenuItem value="hikes" primaryText="Hikes" />
          <MenuItem value="lodging" primaryText="Where to Stay" />
        </SelectField>

        <div>
          {this.props.update === true
            ? <FlatButton
                onSubmit={this._onHandleCancel}
                type="submit"
                label={this.props.update === true ? 'cancel' : null}
                primary={true}
                style={{ marginRight: 5 }}
              />
            : null}

          <FlatButton
            type="submit"
            label={this.props.update === true ? 'update' : 'save'}
            primary={true}
            // value="Reset"
          />
        </div>
      </form>
    );
  }
}
