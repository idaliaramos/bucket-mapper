import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { blue500 } from 'material-ui/styles/colors';
import DropDownComponent from './DropDownComponent';

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

export default class FormComponent extends Component {
  static defaultProps = {
    onSaveTripData: () => {},
    onClickOnSave: () => {},
    onUpdateTripData: () => {}
  };

  constructor(props) {
    super(props);

    this.state = {
      editMode: true,
      location: '',
      url: '',
      body: ''
    };
  }
  _handleClickOnSave = event => {
    event.preventDefault();
    const { onSaveTripData } = this.props;
    let location = document.getElementById('location').value;
    let body = document.getElementById('body').value;
    let url = document.getElementById('url').value;
    let tripData = { body: body, location: location, image: url };
    let value = document.getElementbyId('category');
    // console.log(typeof tripData);
    // console.log('these are the props', this.props);
    // let category = document.getElementById('category').value;
    console.log(value, 'EVENT TARGET');
    onSaveTripData(tripData);
    // this.props.onUpdateTripData(tripData, id);
    console.log(
      this.props.destinationCard,
      '<<<<<<<<<<<props on form component'
    );
  };
  _handleClickOnUpdate = event => {
    event.preventDefault();

    let $form = event.target;

    let location = $form.location.value;
    let body = $form.body.value;
    let url = $form.url.value;
    let id = this.props.adventureCard.id;

    const { onUpdateTripData } = this.props;
    let tripData = { body: body, location: location, image: url };
    onUpdateTripData(id, tripData);
    this.setState({
      editMode: false
    });
  };
  _onHandleCancel = event => {
    event.preventDefault();
    this.setState({
      editMode: false
    });
    console.log(this.props.destinationCard, '<<<<<<<<<<<Cancel button');
  };

  render() {
    // console.log('this is props', this.props);
    return (
      <form
        style={style}
        onSubmit={
          this.props.update === true
            ? this._handleClickOnUpdate
            : this._handleClickOnSave
        }>
        {this.props.adventureCard
          ? <TextField
              id="location"
              defaultValue={this.props.adventureCard.location}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
          : <TextField
              id="location"
              floatingLabelText="Enter Location"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />}
        <br />
        {this.props.adventureCard
          ? <TextField
              id="url"
              defaultValue={this.props.adventureCard.image}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
          : <TextField
              id="url"
              floatingLabelText="Enter url"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />}
        <br />
        {this.props.adventureCard
          ? <TextField
              id="body"
              // floatingLabelText= "body"
              defaultValue={this.props.adventureCard.body}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              // floatingLabelText= "MultiLine and FloatingLabel"
              multiLine={true}
              rows={2}
            />
          : <TextField
              id="body"
              floatingLabelText="Enter Description"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />}
        <DropDownComponent value={this.props.value} />
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
            // onClick={handleCancel}
            // onClick={
            //   this.props.update === true
            //     ? this._handleClickOnUpdate
            //     : this._handleClickOnSave
            // }
          />
        </div>
      </form>
    );
  }
}
