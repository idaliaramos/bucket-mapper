import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { blue500, indigo50 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router-dom';
import {
  Card
  // CardActions,
  // CardMedia,
  // CardTitle,
  // CardText
} from 'material-ui/Card';
const style = {
  height: 100,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: blue500
};
const barStyle = {
  display: 'inline-block',
  marginLeft: 250,
  fill: 'currentcolor',
  height: 0,
  width: 24,
  userSelect: 'none'
};

export default class DestinationCard extends React.Component {
  static defaultProps = {
    onUpdateDestination: () => {},
    onDeleteDestination: () => {}

    // goToTravelboard: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const destinationCard = this.props.destinationCard;

    return (
      <div>
        <Card style={style} zDepth={1} id={destinationCard.id}>
          {this.state.editMode === true
            ? this._renderEditMode()
            : this._renderDisplayMode()}
        </Card>
      </div>
    );
  }

  _renderEditMode() {
    const destinationCard = this.props.destinationCard;
    return (
      <form>
        <div
          style={{
            marginTop: 20,
            color: indigo50,
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
          <input
            ref="nameInput"
            id="name"
            required
            type="text"
            defaultValue={destinationCard.name}
          />
        </div>
        <div />
        <br />
        <FlatButton onClick={this._handleClickSaveButton}>Save</FlatButton>
      </form>
    );
  }

  _handleClickSaveButton = event => {
    this.props.onUpdateDestination(this.props.destinationCard.id, {
      name: this.refs.nameInput.value
    });
    this.setState({
      editMode: false
    });
  };

  _renderDisplayMode() {
    const destinationCard = this.props.destinationCard;

    return (
      <div>
        <Link to={`/destinations/${destinationCard.id}`}>
          <div
            style={{
              marginTop: 20,
              color: indigo50,
              fontSize: 20,
              verticalAlign: 'middle'
            }}>
            <div>
              {destinationCard.name}
            </div>
          </div>
        </Link>
        <div />
        <br />
        <IconMenu
          style={barStyle}
          iconButtonElement={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
          <MenuItem
            primaryText="edit"
            id="edit"
            onClick={this.handleEditClick}
          />
          <MenuItem
            primaryText="delete"
            id="delete"
            onClick={this.handleClickDelete}
          />
        </IconMenu>
      </div>
    );
  }

  handleEditClick = event => {
    this.setState({
      editMode: true
    });
  };
  handleClickDelete = event => {
    this.props.onDeleteDestination(this.props.destinationCard.id);
  };
}
