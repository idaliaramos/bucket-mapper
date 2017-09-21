import React from 'react';
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
    onEditAdventureCard: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props, 'PROPS IN ADVENTURE CARD');
    const adventureCard = this.props.adventureCard;
    return (
      <Card style={style}>
        <CardMedia
          overlay={<CardTitle title={adventureCard.location} subtitle="" />}>
          <img src={adventureCard.image} alt="" />
        </CardMedia>
        {/* <CardTitle title="" subtitle="" /> */}
        <CardText>
          {adventureCard.body}
        </CardText>
        <CardActions>
          <FlatButton onClick={this._handleClickEdit} label="Edit" />
        </CardActions>
      </Card>
    );
  }

  _handleClickEdit = event => {
    event.preventDefault();
    console.log('in the edit adv card');
    this.props.onEditAdventureCard(this.adventureCard.id);
  };
}
