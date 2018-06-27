/* eslint-disable import/first */

import deleteDestinationCardThunk from './deleteDestinationCardThunk';

jest.mock('../../api/deleteCard');
import deleteCard from '../../api/deleteCard';

import data from '../../mock-data';

describe('deleteDestinationCardProcess', () => {
  it('Calls deleteDestinationCard , dispatches DELETE_DESTINATION_CARD_COMPLETED action', () => {
    const thunk = deleteDestinationCardThunk(data.destinationCards[0].id);
    expect(typeof thunk).toBe('function');

    deleteCard.mockReturnValueOnce(Promise.resolve());

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteCard).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_DESTINATION_CARD_COMPLETED',
        id: data.destinationCards[0].id
      });
    });
  });
});
