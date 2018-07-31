import React from "react";
import FormComponent from "../FormComponent";
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
var travel = require("./travel.jpg");

//sets the style for the adventure cards
const style = {
  width: 300,
  margin: 20,
  textAlign: "center",
  display: "block"
};
export default class AdventureCard extends React.Component {
  static defaultProps = {
    onEditAdventureCard: () => {},
    onUpdateAdventureCard: () => {},
    onDeleteAdventureCard: () => {},
    onUpdateTripData: () => {}
  };
  //set the edit mode to false , switch it when user clicks button to edit
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  render() {
    return (
      <div>
        {/* conditional rendering for the cards */}
        <Card style={style}>
          {this.state.editMode === true
            ? this._renderEditMode()
            : this._renderDisplayMode()}
        </Card>
      </div>
    );
  }
  //updates the trip with new information and resets edit mode to false to reset
  updateTripData = (...args) => {
    this.props.onUpdateTripData(...args);
    this.state = {
      editMode: false
    };
  };
  //cancel closes the editing mode
  onCancel = () => {
    this.state = {
      editMode: false
    };
  };
  //function will make call to save the updated information, and swith to viewing mode
  _handleClickSaveButton = event => {
    this.props.onUpdateAdventureCard(this.props.adventureCard.id, {
      url: this.refs.url.value,
      location: this.refs.location.value,
      description: this.refs.description.value
    });
    this.setState({
      editMode: false
    });
  };
  //opens card to be able to be edited
  _handleEditClick = event => {
    this.setState({
      editMode: true
    });
  };
  //deletes the card
  _handleClickDelete = event => {
    this.props.onDeleteAdventureCard(this.props.adventureCard.id);
  };
  // will render edit mode if edit mode is set to true
  _renderEditMode() {
    return (
      <FormComponent
        style={style}
        onUpdateTripData={this.updateTripData}
        update={true}
        adventureCard={this.props.adventureCard}
        onShow={this.props.onShow}
      />
    );
  }
  //will render display mode if edit mode is set to false
  _renderDisplayMode() {
    const adventureCard = this.props.adventureCard;
    return (
      <div>
        <Card id={adventureCard.id}>
          <CardMedia
            overlay={<CardTitle title={adventureCard.location} subtitle="" />}
          >
            <img
              src={adventureCard.url ? adventureCard.url : travel}
              alt=""
              width={240}
              height={240}
            />
          </CardMedia>

          <CardText>{adventureCard.description}</CardText>
          <CardActions>
            <div>
              <IconMenu
                iconButtonElement={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                anchorOrigin={{ horizontal: "left", vertical: "top" }}
                targetOrigin={{ horizontal: "left", vertical: "top" }}
              >
                <MenuItem onClick={this._handleEditClick} primaryText="Edit" />
                <MenuItem
                  onClick={this._handleClickDelete}
                  primaryText="Delete"
                />
              </IconMenu>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}
