import React, { Component } from 'react';
import AdventurePageLayout from '../layout/AdventurePageLayout';
// import DestinationFormComponent from '../destination/DestinationFormComponent';
import AdventureCard from '../adventureboard/AdventureCard';

import FormComponent from '../FormComponent';
import NavigationComponent from '../nav/NavigationComponent';

export default class AdventurePage extends Component {
  state = {
    filterTerm: ''
  };

  render() {
    return (
      <div className="AdventurePage">
        <AdventurePageLayout>
          <NavigationComponent
            onCreateTripData={this.props.onCreateTripData}
            onSearch={this._handleSearch}
          />
          <FormComponent
            onSaveTripData={this._handleSaveTripData}
            onChange={this.props.onChange}
          />
          {this.props.adventureCards &&
            this.props.adventureCards
              .filter(adventureCard => {
                return this.state.filterTerm !== ''
                  ? adventureCard.category
                    ? adventureCard.category.includes(this.state.filterTerm) ||
                      adventureCard.body.includes(this.state.filterTerm) ||
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
                />
              )}
        </AdventurePageLayout>
      </div>
    );
  }

  _handleSaveTripData = tripData => {
    this.props.onCreateTripData({
      ...tripData,
      destination: [this.props.destination.id]
    });
  };

  _handleSearch = filterTerm => {
    this.setState({
      filterTerm
    });
  };
}
