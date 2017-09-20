import createDestinationCard from '../../api/createDestinationCard';

export default function createDestinationCardThunk(name) {
  return (dispatch, getState, env) => {
    return createDestinationCard(name, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(destinationCard => {
      dispatch({
        type: 'CREATE_CARD_COMPLETED',
        destinationCard: destinationCard
      });
      return destinationCard;
    });
  };
}
