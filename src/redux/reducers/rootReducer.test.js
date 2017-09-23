import rootReducer from './rootReducer';

import data from '../../mock-data';
console.log(data.destinationCards[0], 'DATA');

describe('root reducer', () => {
  it('action.type CREATE_DESTINATION_CARD_COMPLETED', () => {
    const action = {
      type: 'CREATE_DESTINATION_CARD_COMPLETED',
      destinationCard: data.destinationCards[0]
    };

    const currentState = {
      destinationCards: []
    };

    const nextState = {
      ...currentState,
      destinationCards: [action.destinationCard]
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
