import updateDestinationCard from '../../api/updateDestinationCard';

export default function updateDestinationCardThunk(id, changes) {
  return (dispatch, getState, env) => {
    dispatch({ type: 'UPDATE_DESTINATION_CARD_STARTED' });
    return updateDestinationCard(id, changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(updatedDestinationCard => {
      dispatch({ type: 'UPDATE_NOTE_COMPLETED', note: updatedDestinationCard });
      return updatedDestinationCard;
    });
  };
}
