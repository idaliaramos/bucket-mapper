import React from 'react';
import AdventurePageLayout from '../layout/AdventurePageLayout';
import DestinationFormComponent from '../destination/DestinationFormComponent';
import AdventureCard from '../adventureboard/AdventureCard';
import ListCard from '../adventureboard/ListCard';
import FormComponent from '../FormComponent';

export default function adventurePage(props) {
  console.log(props, 'props in adventure page');
  return (
    <div className="AdventurePage">
      <AdventurePageLayout>
        {/* <ListCard /> */}
        <FormComponent onSaveTripData={props.onSaveTripData} />
        {/* <AdventureCard onSaveTripData={props.onSave} /> */}
        {props.adventureCards &&
          props.adventureCards.map(adventureCard =>
            <AdventureCard
              key={adventureCard.id}
              adventureCard={adventureCard}
              onSaveTripData={props.onSaveTripData}
            />
          )}
      </AdventurePageLayout>
    </div>
  );
}
// import {
//   Card,
//   CardActions,
//   CardHeader,
//   CardMedia,
//   CardTitle,
//   CardText
// } from 'material-ui/Card';
// import TextField from 'material-ui/TextField';
// import { orange500, blue500 } from 'material-ui/styles/colors';
// import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
