import React from 'react';
import TravelBoardLayout from './TravelBoardLayout';
import TravelBoardComponent from './TravelBoardComponent';
import TextField from 'material-ui/TextField';
import { orange500, blue500 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default function TravelBoardPageComponent(
  {
    onSave={onsave}
  }
) {
  return (
    <div className="TravelBoardPageComponent">
        <DestinationForm />
      </TravelBoardLayout>
    </div>
  );
}
