/* eslint-disable import/first */
import createAdventureCardThunk from './createAdventureCardThunk';

jest.mock('../../api/createAdventureCard');
import createAdventureCard from '../../api/createAdventureCard';

import data from '../../mock-data';

describe('createAdventureCardThunk', () => {
  it('Calls createAdventure api, make sure it fires, and checks created nots completed', () => {
    const { id, ...cardWithoutId } = data.adventureCards[0];
    const thunk = createAdventureCardThunk(cardWithoutId);
    expect(typeof thunk).toBe('function');

    createAdventureCard.mockReturnValueOnce(
      Promise.resolve({ ...data.adventureCards[0] })
    );

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdCard => {
      expect(createAdventureCard).toBeCalled();
      expect(createdCard).toEqual({ ...data.adventureCards[0] });
      expect(dispatch).toBeCalledWith({
        type: 'CREATE_ADVENTURE_CARD_COMPLETED',
        adventureCard: createdCard
      });
    });
  });
});
