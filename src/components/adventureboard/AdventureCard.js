import React from 'react';
import ReactCardFlip from 'react-card-flip';
import FormComponent from '../FormComponent';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import FlatButton from 'material-ui/FlatButton';

//
const style = {
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'block'
};

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
      isFlipped: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  //fuction handle update trip data

  // this.props.onUpdateTripData ( trip data)
  render() {
    console.log(this.props, 'PROPSssss');
    const adventureCard = this.props.adventureCard;
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

  _renderEditMode() {
    const adventureCard = this.props.adventureCard;
    return (
      <FormComponent
        style={style}
        onUpdateTripData={this.props.onUpdateTripData}
        update={true}
        adventureCard={this.props.adventureCard}
        onShow={this.props.onShow}
      />
      // <div>
      //   <div>
      //     <CardMedia
      //       overlay={
      //         <CardTitle>
      //           <input
      //             ref="location"
      //             type="text"
      //             defaultValue={adventureCard.location}
      //           />
      //         </CardTitle>
      //       }>
      //       <img src={adventureCard.image} alt="" />
      //     </CardMedia>
      //   </div>
      //   <div>
      //     <CardText>
      //       <input ref="name" type="text" defaultValue={adventureCard.body} />
      //       {/* ref="title" type="text">
      //       {adventureCard.body} */}
      //     </CardText>
      //   </div>
      //   <div>
      //     <CardActions>
      //       <FlatButton onClick={this._handleClickonUpdate} label="Save" />
      //     </CardActions>
      //   </div>
      // </div>
    );
  }
  //possibly use this for second part
  // _handleClickOnUpdate = event => {
  //   event.preventDefault();
  //
  //   let $form = event.target;
  //   console.log($form);
  //   let location = $form.activityName.value;
  //   let body = $form.description.value;
  //   let url = $form.url.value;
  //   let id = this.props.adventureCard.id;
  //   const { onUpdateTripData } = this.props;
  //   let tripData = { body: body, location: location, image: url };
  //   onUpdateTripData(id, tripData);
  // };

  _handleClickSaveButton = event => {
    console.log(this.refs.nameInput, 'HANDLC');
    // console.log(this.refs.nameInput.value, '<<<<<<');
    this.props.onUpdateAdventureCard(this.props.adventureCard.id, {
      // image: this.refs.url.value,
      // location: this.refs.location.value,
      // body: this.refs.location.value
      image: this.props.adventureCard.url,
      location: this.refs.location.value,
      body: this.refs.location.value
    });
    this.setState({
      editMode: false
    });
  };
  _handleEditClick = event => {
    console.log('i clicked the edit');
    this.setState({
      editMode: true
    });
    // this.props.onShowAdventureCard();
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
            <img src={adventureCard.image} alt="" />
          </CardMedia>

          <CardText>
            {adventureCard.body}
          </CardText>
          <CardActions>
            {/* <FlatButton onClick={this._handleEditClick} label="Edit" /> */}
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
//     console.log('in the edit adv card');
//     this.props.onEditAdventureCard(this.adventureCard.id);
//   };
// }
