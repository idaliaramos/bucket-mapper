import React from 'react';
import ReactCardFlip from 'react-card-flip';
import FormComponent from '../FormComponent';
import Image from 'react-image-resizer';
import {
  Card,
  CardActions,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
var travel = require('./travel.jpg');

//
const style = {
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'block'
};
// display: 'block',
//  width: '30vw',
//  transitionDuration: '0.3s',

export default class AdventureCard extends React.Component {
  static defaultProps = {
    onEditAdventureCard: () => {},
    onUpdateAdventureCard: () => {},
    onDeleteAdventureCard: () => {},
    onUpdateTripData: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
  }

  render() {
    return (
      // <ReactCardFlip isFlipped={this.state.isFlipped}>
      <div>
        <Card style={style}>
          {this.state.editMode === true
            ? this._renderEditMode()
            : this._renderDisplayMode()}
          {/* {this.props.onShow === true
            ? this._renderEditMode()
            : this._renderDisplayMode()} */}
        </Card>
      </div>
      // </ReactCardFlip>
    );
  }
  //example
  updateTripData = (...args) => {
    this.props.onUpdateTripData(...args);
    this.state = {
      editMode: false
    };
  };
  onCancel = () => {
    this.state = {
      editMode: false
    };
  };
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
  _handleClickSaveButton = event => {
    //console.log(this.refs, 'this is the refs <<<<<<<<<');
    this.props.onUpdateAdventureCard(this.props.adventureCard.id, {
      // image: this.props.adventureCard.url,
      image: this.refs.image.value,
      location: this.refs.location.value,
      body: this.refs.body.value
    });
    this.setState({
      editMode: false
    });
  };
  _handleEditClick = event => {
    this.setState({
      editMode: true
    });
  };
  _handleClickDelete = event => {
    this.props.onDeleteAdventureCard(this.props.adventureCard.id);
  };

  _renderDisplayMode() {
    const adventureCard = this.props.adventureCard;
    return (
      <div>
        <Card id={adventureCard.id}>
          <CardMedia
            overlay={<CardTitle title={adventureCard.location} subtitle="" />}>
            <img
              src={adventureCard.image ? adventureCard.image : travel}
              alt=""
              width={240}
              height={240}
            />
          </CardMedia>

          <CardText>
            {adventureCard.body}
          </CardText>
          <CardActions>
            <div>
              <IconMenu
                iconButtonElement={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                targetOrigin={{ horizontal: 'left', vertical: 'top' }}>
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

// import React from 'react';
// import FormComponent from '../FormComponent';
// import {
//   Card,
//   CardActions,
//   CardHeader,
//   CardMedia,
//   CardTitle,
//   CardText
// } from 'material-ui/Card';
//
// import FlatButton from 'material-ui/FlatButton';
//
// //
// const style = {
//   width: 300,
//   margin: 20,
//   textAlign: 'center',
//   display: 'block'
// };
//
// export default class AdventureCard extends React.Component {
//   static defaultProps = {
//     onEditAdventureCard: () => {}
//   };
//
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//
//   render() {
//     const adventureCard = this.props.adventureCard;
//     return (
//       <Card style={style}>
//         <CardMedia
//           overlay={<CardTitle title={adventureCard.location} subtitle="" />}>
//           <img src={adventureCard.image} alt="" />
//         </CardMedia>
//         {/* <CardTitle title="" subtitle="" /> */}
//         <CardText>
//           {adventureCard.body}
//         </CardText>
//         <CardActions>
//           <FlatButton onClick={this._handleClickEdit} label="Edit" />
//         </CardActions>
//       </Card>
//     );
//   }
//
//   _handleClickEdit = event => {
//     event.preventDefault();

//     this.props.onEditAdventureCard(this.adventureCard.id);
//   };
// }
