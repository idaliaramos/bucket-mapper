/* eslint-disable import/first */
import createDestinationThunk from './createDestinationThunk';

jest.mock('../../api/createDestinationCard');
import createDestinationCard from '../../api/createDestinationCard';

import data from '../../mock-data';

describe('createDestinationCardThunk', () => {
  it('Calls createDestination api, make sure it fires, and checks created nots completed', () => {
    const { id, ...cardWithoutId } = data.destinationCards[0];
    const thunk = createDestinationThunk(cardWithoutId);
    expect(typeof thunk).toBe('function');

    createDestinationCard.mockReturnValueOnce(
      Promise.resolve({ ...data.destinationCards[0] })
    );

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdCard => {
      expect(createDestinationCard).toBeCalled();
      expect(createdCard).toEqual({ ...data.destinationCards[0] });
      expect(dispatch).toBeCalledWith({
        type: 'CREATE_DESTINATION_CARD_COMPLETED',
        destinationCard: createdCard
      });
    });
  });
});
