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

    this.state = {};
  }
  _handleClickOnSave = event => {
    event.preventDefault();
    const { onSaveTripData } = this.props;
    let location = document.getElementById('activityName').value;
    let body = document.getElementById('description').value;
    let url = document.getElementById('url').value;
    let tripData = { body: body, location: location, image: url };
    // console.log(typeof tripData);
    // console.log('these are the props', this.props);
    onSaveTripData(tripData);
    // this.props.onUpdateTripData(tripData, id);
  };
  _handleClickOnUpdate = event => {
    event.preventDefault();

    let $form = event.target;
    console.log(this.props, '<<<<<<<<<<<props on form component');
    let location = $form.activityName.value;
    let body = $form.description.value;
    let url = $form.url.value;
    let id = this.props.adventureCard.id;
    const { onUpdateTripData } = this.props;
    let tripData = { body: body, location: location, image: url };
    onUpdateTripData(id, tripData);
  };
  handleCancel = event => {
    event.preventDefault();
    // this.setState{
    //   handleClick
    // }
    console.log(
      this.props.destinationCard,
      '<<<<<<<<<<<props on form component'
    );
  };

  render() {
    console.log('this is props', this.props);
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
              id="activityName"
              defaultValue={this.props.adventureCard.location}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />
          : <TextField
              id="activityName"
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
              id="description"
              // floatingLabelText= "body"
              defaultValue={this.props.adventureCard.body}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              // floatingLabelText= "MultiLine and FloatingLabel"
              multiLine={true}
              rows={2}
            />
          : <TextField
              id="description"
              floatingLabelText="Enter Location"
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
            />}

        <br />

        <div>
          {this.props.update === true
            ? <RaisedButton
                type="submit"
                label={this.props.update === true ? 'cancel' : null}
                primary={true}
                style={{ marginRight: 5 }}
              />
            : null}

          <RaisedButton
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
