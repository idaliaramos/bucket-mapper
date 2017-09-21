import React from 'react';
// import ReactCardFlip from 'react-card-flip';
import FormComponent from '../FormComponent';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';

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
    onDeleteAdventureCard: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const adventureCard = this.props.adventureCard;
    return (
      // <ReactCardFlip isFlipped={this.state.isFlipped}>
      <div>
        <Card style={style} id={adventureCard.id}>
          {this.state.editMode === true
            ? this._renderEditMode()
            : this._renderDisplayMode()}
        </Card>
      </div>
      // </ReactCardFlip>
    );
  }

  _renderEditMode() {
    const adventureCard = this.props.adventureCard;
    return (
      <div>
        <div>
          <CardMedia
            overlay={
              <CardTitle>
                <input
                  ref="location"
                  type="text"
                  defaultValue={adventureCard.location}
                />
              </CardTitle>
            }>
            <img src={adventureCard.image} alt="" />
          </CardMedia>
        </div>
        <div>
          <CardText>
            <input ref="name" type="text" defaultValue={adventureCard.name} />
            {/* ref="title" type="text">
            {adventureCard.body} */}
          </CardText>
        </div>
        <div>
          <CardActions>
            <FlatButton onClick={this._handleClickSaveButton} label="Save" />
          </CardActions>
        </div>
      </div>
    );
  }
  _handleClickSaveButton = event => {
    // console.log(this.refs.nameInput);
    // console.log(this.refs.nameInput.value, '<<<<<<');
    this.props.onUpdateDestination(this.props.destinationCard.id, {
      name: this.refs.nameInput.value
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
  };

  _renderDisplayMode() {
    const adventureCard = this.props.adventureCard;
    return (
      <div>
        <Card>
          <CardMedia
            overlay={<CardTitle title={adventureCard.location} subtitle="" />}>
            <img src={adventureCard.image} alt="" />
          </CardMedia>
          {/* <CardTitle title="" subtitle="" /> */}
          <CardText>
            {adventureCard.body}
          </CardText>
          <CardActions>
            <FlatButton onClick={this._handleEditClick} label="Edit" />
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
