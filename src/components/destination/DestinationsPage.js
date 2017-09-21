import React from 'react';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DestinationFormComponent from './DestinationFormComponent';
import DestinationsPageLayout from './DestinationsPageLayout';
import DestinationCard from './DestinationCard';
// import AppBar from 'material-ui/AppBar';
// const AppbarStyles = getMuiTheme({
//     palette: {
//     accent1Color: deepOrange500,
//     }
// });

export default function DestinationsPage(props) {
  console.log(props.destinationCards, 'props on destination page');

  return (
    <div className="DestinationsPage">
      {/* <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      /> */}

      <DestinationsPageLayout>
        <DestinationFormComponent
          onSaveDestination={props.onSaveDestination}
          onDeleteDestination={props.onDeleteDestination}
        />
        {props.destinationCards &&
          props.destinationCards.map(destinationCard =>
            <DestinationCard
              destinationCard={destinationCard}
              key={destinationCard.id}
              onUpdateDestination={props.onUpdateDestination}
              onDeleteDestination={props.onDeleteDestination}>
              {' '}
            </DestinationCard>
          )}
      </DestinationsPageLayout>
    </div>
  );
}
