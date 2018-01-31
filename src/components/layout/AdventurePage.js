import React, { Component } from 'react';
import AdventurePageLayout from '../layout/AdventurePageLayout';
// import DestinationFormComponent from '../destination/DestinationFormComponent';
import AdventureCard from '../adventureboard/AdventureCard';

import FormComponent from '../FormComponent';
import NavigationComponent from '../nav/NavigationComponent';

export default class AdventurePage extends Component {
  state = {
    filterTerm: '',
    adventureCardPage: true
  };
  render() {
    return (
      <div className="AdventurePage">
        <AdventurePageLayout>
          <NavigationComponent
            onCreateTripData={this.props.onCreateTripData}
            onSearch={this._handleSearch}
            destinationCards={this.props.destinationCards}

            //check
          />
          {this.props.fail
            ? this.props.history.push('/destinations')
            : <FormComponent
                onSaveTripData={this._handleSaveTripData}
                onChange={this.props.onChange}
              />}
          {this.props.adventureCards &&
            this.props.adventureCards
              .filter(adventureCard => {
                return this.state.filterTerm !== ''
                  ? adventureCard.category
                    ? adventureCard.category.includes(this.state.filterTerm) ||
                      adventureCard.description.includes(
                        this.state.filterTerm
                      ) ||
                      adventureCard.location.includes(this.state.filterTerm)
                    : false
                  : true;
              })
              .map(adventureCard =>
                <AdventureCard
                  key={adventureCard.id}
                  adventureCard={adventureCard}
                  onUpdateTripData={this.props.onUpdateTripData}
                  onUpdateAdventureCard={this.props.onUpdateAdventureCard}
                  onDeleteAdventureCard={this.props.onDeleteAdventureCard}
                  onShowAdventureCard={this.props.onShowAdventureCard}
                  onShow={this.props.onShow}
                  onChange={this.props.onChange}
                  //fail={this.props.fail}
                />
              )}
        </AdventurePageLayout>
      </div>
    );
  }

  _handleSaveTripData = tripData => {
    console.log(tripData, 'this is the trip data');
    console.log(this.props, 'this is the destination');
    this.props.onCreateTripData(tripData, this.props.destinationId);
  };

  _handleSearch = filterTerm => {
    this.setState({
      filterTerm
    });
  };
}
