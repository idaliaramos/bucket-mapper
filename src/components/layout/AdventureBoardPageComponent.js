import React from 'react';
import AdventureBoardLayout from '../layout/AdventureBoardLayout';
import DestinationFormComponent from '../destination/DestinationFormComponent';
import AdventureCard from '../adventureboard/AdventureCard';

import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default function AdventureBoardPageComponent(
  {
    onSave
    input
    //pass in props
    // cards passed-in as props and are automatically changed when state changes (through maptateToProps)
  }

) {
  return (
    <div className="AdventureBoardPage">
      <AdventureBoardLayout>
        <DestinationFormComponent />
        <AdventureCard />
        <FormComponent />
        {props.cards && props.cards.map(card => <AdventureCard prop={}></AdventureCard> )}
      </AdventureBoardLayout>
    </div>
  );
}
