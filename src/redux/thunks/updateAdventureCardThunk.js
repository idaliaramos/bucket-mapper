import updateAdventureCard from '../../api/updateAdventureCard';

export default function updateAdventureCardThunk(id, changes) {
  return (dispatch, getState, env) => {
    return updateAdventureCard(id, changes, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(adventureCard => {
      dispatch({
        type: 'UPDATED_ADVENTURE_CARD_COMPLETED',
        adventureCard: adventureCard
      });
      return adventureCard;
    });
  };
}
