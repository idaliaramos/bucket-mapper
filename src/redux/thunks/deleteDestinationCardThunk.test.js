/* eslint-disable import/first */

import deleteDestinationCardThunk from './deleteDestinationCardThunk';

jest.mock('../../api/deleteDestinationCard');
import deleteDestinationCard from '../../api/deleteDestinationCard';

import data from '../../mock-data';

describe('deleteDestinationCardProcess', () => {
  it('Calls deleteDestinationCard , dispatches DELETE_DESTINATION_CARD_COMPLETED action', () => {
    const thunk = deleteDestinationCardThunk(data.destinationCards[0].id);
    expect(typeof thunk).toBe('function');

    deleteDestinationCard.mockReturnValueOnce(Promise.resolve());

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteDestinationCard).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_DESTINATION_CARD_COMPLETED',
        destinationCardId: data.destinationCards[0].id
      });
    });
  });
});
