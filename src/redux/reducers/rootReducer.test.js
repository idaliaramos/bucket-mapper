import rootReducer from './rootReducer';

import data from '../../mock-data';

describe(' create card root reducer', () => {
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

describe('getDestinationCards reducer', () => {
  it(' action type is GET_DESTINATION_CARDS_COMPLETED', () => {
    const action = {
      type: 'GET_DESTINATION_CARDS_COMPLETED',
      destinationCards: [...data.destinationCards]
    };

    const currentState = {
      destinationCards: null
    };

    const nextState = {
      destinationCards: action.destinationCards
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});

it('should delete a destination card', () => {
  let initialState = {
    destinationCards: [
      {
        id: 0,
        destination: 'mexico'
      }
    ]
  };
  let action = {
    type: 'DELETE_DESTINATION_CARD_COMPLETED',
    destinationCards: {
      id: 1,
      destination: 'taiwan'
    }
  };
  let expectedResult = {
    destinationCards: [
      {
        id: 0,
        destination: 'mexico'
      }
    ]
  };

  let result = rootReducer(initialState, action);
  expect(result).toEqual(expectedResult);
});
describe('update card completed reducer', () => {
  it(' UPDATED_DESTINATION_CARD_COMPLETED', () => {
    const action = {
      type: 'UPDATED_DESTINATION_CARD_COMPLETED',
      destinationCard: {
        ...data.destinationCards[0],
        destination: data.destinationCards[0].destination + ' UPDATED'
      }
    };

    const currentState = {
      destinationCards: [data.destinationCards[0], data.destinationCards[1]],
      selectedId: data.destinationCards[0].id
    };

    const nextState = {
      destinationCards: [action.destinationCard, data.destinationCards[1]],
      selectedId: data.destinationCards[0].id
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
