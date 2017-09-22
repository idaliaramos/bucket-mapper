import rootReducer from './rootReducer';

import data from '../../mock-data';

describe('root reducer', () => {
  it('action.type CREATE_DESTINATION_CARD_COMPLETED', () => {
    const action = {
      type: 'CREATE_DESTINATION_CARD_COMPLETED',
      destinationCard: { ...data.destinationCards[0] }
    };

    const currentState = {
      destinationCards: [data.destinationCards[1]],
      selectedNoteId: null
    };

    const nextState = {
      destinationCards: [action.destinationCard, data.destinationCards[1]],
      selectedDestinationId: action.destinationCard.id,
      isCreatingNote: false
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
