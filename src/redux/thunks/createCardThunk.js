import createAdventureCard from '../../api/createAdventureCard';

export default function createAdventureCardThunk(input) {
  return (dispatch, getState, env) => {
    return createAdventureCard(input, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(createdCard => {
      dispatch({ type: 'CREATE_CARD_COMPLETED', card: createdCard });
      return createdCard;
    });
  };
}
