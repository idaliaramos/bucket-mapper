import React, { Component } from 'react';
import getAdventureCards from '../api/getAdventureCards';

import env from '../env';

export default class AdventurePageContainer extends Component {
  state = {
    adventureCards: []
  };

  render() {
    return <AdventurePageContainer destinations={this.state.destinations} />;
  }

  // componentDidMount() {
  //   const accumulator = {};
  //   // const { destinationId } = this.props.match.params;
  //   getDestination(destinationId, {
  //     databaseId: env.AIRTABLE_DATABASE_ID,
  //     token: env.AIRTABLE_TOKEN
  //   })
  //     .then(destinations => {
  //       return getAdventureCards({
  //         databaseId: env.AIRTABLE_DATABASE_ID,
  //         token: env.AIRTABLE_TOKEN,
  //
  //       });
  //     })
  //
  // }
}
