/* eslint-disable import/first */

import getAdventureCardsThunk from './getAdventureCardsThunk';

jest.mock('../../api/getAdventureCards');
import getAdventureCards from '../../api/getAdventureCards';

import data from '../../mock-data';

describe('getAdventureCardsThunk', () => {
  it('Calls getAdventureCards, returns array of cards. dispatches GET_ADVENTURE_CARDS_COMPLETED ', () => {
    const thunk = getAdventureCardsThunk();
    expect(typeof thunk).toBe('function');

    getAdventureCards.mockReturnValueOnce(
      Promise.resolve([...data.adventureCards])
    );

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(adventureCards => {
      expect(getAdventureCards).toBeCalled();
      expect(adventureCards).toEqual([...data.adventureCards]);
      expect(dispatch).toBeCalledWith({
        type: 'GET_ADVENTURE_CARDS_COMPLETED',
        adventureCards
      });
    });
  });
});
