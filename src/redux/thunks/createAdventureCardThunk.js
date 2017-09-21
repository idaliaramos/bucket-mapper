import createAdventureCard from '../../api/createAdventureCard';

export default function createAdventureCardThunk(tripData) {
  return (dispatch, getState, env) => {
    return createAdventureCard(tripData, {
      databaseId: env.AIRTABLE_DATABASE_ID,
      token: env.AIRTABLE_TOKEN
    }).then(adventureCard => {
      dispatch({
        type: 'CREATE_ADVENTURE_CARD_COMPLETED',
        adventureCard: adventureCard
      });
      return adventureCard;
    });
  };
}
