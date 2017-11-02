import createAdventureCard from '../../api/createAdventureCard';

export default function createAdventureCardThunk(tripData, id) {
  return (dispatch, getState, env) => {
    console.log(tripData, 'this is the tripdata');
    return createAdventureCard(tripData, id).then(adventureCard => {
      dispatch({
        type: 'CREATE_ADVENTURE_CARD_COMPLETED',
        adventureCard: adventureCard
      });
      return adventureCard;
    });
  };
}
