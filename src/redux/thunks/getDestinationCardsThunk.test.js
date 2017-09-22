/* eslint-disable import/first */

import getDestinationCardsThunk from './getDestinationCardsThunk';

jest.mock('../../api/getDestinationCards');
import getDestinationCards from '../../api/getDestinationCards';

import data from '../../mock-data';

describe('getDestinationCardsThunk', () => {
  it('Calls getDestinationCards, returns array of cards. dispatches GET_DESTINATION_CARDS_COMPLETED ', () => {
    const thunk = getDestinationCardsThunk();
    expect(typeof thunk).toBe('function');

    getDestinationCards.mockReturnValueOnce(
      Promise.resolve([...data.destinationCards])
    );

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(destinationCards => {
      expect(getDestinationCards).toBeCalled();
      expect(destinationCards).toEqual([...data.destinationCards]);
      expect(dispatch).toBeCalledWith({
        type: 'GET_DESTINATION_CARDS_COMPLETED',
        destinationCards
      });
    });
  });
});
