import updateDestinationCard from '../../api/updateDestinationCard';

export default function updateDestinationCardThunk(id, changes) {
  return (dispatch, getState, env) => {
    return updateDestinationCard(id, changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(destinationCard => {
      dispatch({
        type: 'UPDATED_DESTINATION_CARD_COMPLETED',
        destinationCard: destinationCard
      });
      return destinationCard;
    });
  };
}
