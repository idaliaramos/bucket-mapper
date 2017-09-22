import React from 'react';
import AdventurePageLayout from '../layout/AdventurePageLayout';
import DestinationFormComponent from '../destination/DestinationFormComponent';
import AdventureCard from '../adventureboard/AdventureCard';
import ListCard from '../adventureboard/ListCard';
import FormComponent from '../FormComponent';
import NavigationComponent from '../nav/NavigationComponent';

export default function AdventurePage(props) {
  console.log(props, 'props in adventure page');
  function handleSaveTripData(tripData) {
    props.onCreateTripData({
      ...tripData,
      destination: [props.destination.id]
    });
  }
  return (
    <div className="AdventurePage">
      <AdventurePageLayout>
        {/* <NavigationComponent /> */}
        <FormComponent onSaveTripData={handleSaveTripData} />
        {props.adventureCards &&
          props.adventureCards.map(adventureCard =>
            <AdventureCard
              key={adventureCard.id}
              adventureCard={adventureCard}
              onUpdateTripData={props.onUpdateTripData}
              onUpdateAdventureCard={props.onUpdateAdventureCard}
              onDeleteAdventureCard={props.onDeleteAdventureCard}
              onShowAdventureCard={props.onShowAdventureCard}
              onShow={props.onShow}
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
