import React from 'react';

import { Card, CardActions, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const style = {
  height: 200,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'
};

export default function AdventureCardNoImage(props) {
  const adventureCard = this.props.adventureCard;
  return (
    <Card style={style}>
      <CardTitle title={adventureCard.name} />
      <CardText>
        {adventureCard.body}
      </CardText>
      <CardActions>
        <FlatButton label="Edit" />
      </CardActions>
    </Card>
  );
}
