import createDestinationCard from '../../api/createDestinationCard';

export default function createDestinationCardThunk(destination) {
  return (dispatch, getState, env) => {
    return createDestinationCard(destination, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(destinationCard => {
      dispatch({
        type: 'CREATE_DESTINATION_CARD_COMPLETED',
        destinationCard: destinationCard
      });
      return destinationCard;
    });
  };
}
