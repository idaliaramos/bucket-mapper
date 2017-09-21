import React from 'react';
import { blue500, indigo50 } from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

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

export default class ListCard extends React.Component {
  static defaultProps = {
    onUpdateList: () => {},
    onDeleteList: () => {}
    // goToTravelboard: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listCard = this.props.listCard;
    console.log(listCard, 'ListCard');
    console.log(this.state);
    return (
      <div>
        <Paper style={style} zDepth={1} id="3">
          {this.state.editMode === true
            ? this._renderEditMode()
            : this._renderDisplayMode()}
        </Paper>
      </div>
    );
  }

  _renderEditMode() {
    const listCard = this.props.listCard;
    return (
      <div>
        <div
          style={{
            marginTop: 20,
            color: indigo50,
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
          <input ref="nameInput" type="text" defaultValue=
            // {listCard.name}
            "Board"
           />
        </div>
        <div />
        <br />
        <button onClick={this._handleClickSaveButton}>Save</button>
      </div>
    );
  }

  _handleClickSaveButton = event => {
    // console.log(this.refs.nameInput);
    // console.log(this.refs.nameInput.value, '<<<<<<');
    // this.props.onUpdateDestination(this.props.listCard.id, {
    //   name: this.refs.nameInput.value
    // });
    this.setState({
      editMode: false
    });
  };

  _renderDisplayMode() {
    const listCard = this.props.listCard;
    return (
      <div>
        <div
          style={{
            marginTop: 20,
            color: indigo50,
            fontSize: 20,
            verticalAlign: 'middle'
          }}>
          <div>
            {/* {listCard.name} */}
            Beaches
          </div>
        </div>
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
          <MenuItem primaryText="edit" onClick={this.handleEditClick} />
          <MenuItem primaryText="delete" onClick={this.handleClickDelete} />
        </IconMenu>
      </div>
    );
  }

  handleEditClick = event => {
    console.log('i clicked the edit');
    this.setState({
      editMode: true
    });
  };
  handleClickDelete = event => {
    console.log('ia m in delete');
    this.props.onUpdateDestination(this.props.listCard.id);
    console.log(this.props.listCard, 'p');
    console.log(this.props.listCard.id, 'dci');
  };
}
