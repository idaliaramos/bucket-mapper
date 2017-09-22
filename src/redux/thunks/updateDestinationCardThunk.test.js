/* eslint-disable import/first */

import updateDestinationCardThunk from './updateDestinationCardThunk';

jest.mock('../../api/updateDestinationCard');
import updateDestinationCard from '../../api/updateDestinationCard';

import data from '../../mock-data';

describe('updateDestinationCardThunk', () => {
  it('Calls updateDestinationCard and calls dispatch', () => {
    const { id, ...changes } = data.destinationCards[0];
    const thunk = updateDestinationCardThunk(id, changes);
    expect(typeof thunk).toBe('function');

    updateDestinationCard.mockReturnValueOnce(
      Promise.resolve({ ...data.destinationCards[0] })
    );

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(updatedDestinationCard => {
      expect(updateDestinationCard).toBeCalled();
      expect(updatedDestinationCard).toEqual({ ...data.destinationCards[0] });
      expect(dispatch).toBeCalledWith({
        type: 'UPDATED_DESTINATION_CARD_COMPLETED',
        destinationCard: updatedDestinationCard
      });
    });
  });
});
