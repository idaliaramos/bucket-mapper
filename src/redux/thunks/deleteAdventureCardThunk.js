import deleteAdventureCard from '../../api/deleteAdventureCard';

export default function deleteAdventureCardThunk(id) {
  return (dispatch, getState, env) => {
    return deleteAdventureCard(id, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(() => {
      dispatch({ type: 'DELETE_ADVENTURE_CARD_COMPLETED', id: id });
      return true;
    });
  };
}
