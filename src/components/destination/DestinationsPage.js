import React from 'react';

import DestinationFormComponent from './DestinationFormComponent';
import DestinationsPageLayout from './DestinationsPageLayout';
import DestinationCard from './DestinationCard';

export default function DestinationsPage(props) {
  // debugger;
  return (
    <div className="DestinationsPage">
      <DestinationsPageLayout {...props}>
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
