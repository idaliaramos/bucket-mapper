import deleteCard from '../../api/deleteCard';

export default function deleteDestinationCardThunk(id) {
  return (dispatch, getState, env) => {
    return deleteCard(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(() => {
      dispatch({ type: 'DELETE_DESTINATION_CARD_COMPLETED', id: id });
      return true;
    });
  };
}
