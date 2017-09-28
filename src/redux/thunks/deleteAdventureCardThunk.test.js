/* eslint-disable import/first */

import deleteAdventureCardThunk from './deleteAdventureCardThunk';

jest.mock('../../api/deleteAdventureCard');
import deleteAdventureCard from '../../api/deleteAdventureCard';

import data from '../../mock-data';

describe('deleteAdventureCardProcess', () => {
  it('Calls deleteAdventureCard , dispatches DELETE_ADVENTURE_CARD_COMPLETED action', () => {
    const thunk = deleteAdventureCardThunk(data.adventureCards[0].id);
    expect(typeof thunk).toBe('function');

    deleteAdventureCard.mockReturnValueOnce(Promise.resolve());

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteAdventureCard).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_ADVENTURE_CARD_COMPLETED',
        id: data.adventureCards[0].id
      });
    });
  });
});
