/* eslint-disable import/first */

import updateAdventureCardThunk from './updateAdventureCardThunk';

jest.mock('../../api/updateAdventureCard');
import updateAdventureCard from '../../api/updateAdventureCard';

import data from '../../mock-data';

describe('updateAdventureCardThunk', () => {
  it('Calls updateAdventureCard and calls dispatch', () => {
    const { id, ...changes } = data.adventureCards[0];
    const thunk = updateAdventureCardThunk(id, changes);
    expect(typeof thunk).toBe('function');

    updateAdventureCard.mockReturnValueOnce(
      Promise.resolve({ ...data.adventureCards[0] })
    );

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(updatedAdventureCard => {
      expect(updateAdventureCard).toBeCalled();
      expect(updatedAdventureCard).toEqual({ ...data.adventureCards[0] });
      expect(dispatch).toBeCalledWith({
        type: 'UPDATED_ADVENTURE_CARD_COMPLETED',
        adventureCard: updatedAdventureCard
      });
    });
  });
});
