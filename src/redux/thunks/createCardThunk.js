import createCard from '../../api/createCard';

export default function createCardThunk(input) {
  return (dispatch, getState, env) => {
    return createCard(input, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(createdCard => {
      dispatch({ type: 'CREATE_CARD_COMPLETED', card: createdCard });
      return createdCard;
    });
  };
}
