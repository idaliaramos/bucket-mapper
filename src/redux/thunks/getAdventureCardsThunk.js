import getAdventureCards from '../../api/getAdventureCards';

export default function getAdventureCardsThunk(destinationNid) {
  return (dispatch, getState, env) => {
    return getAdventureCards(destinationNid).then(adventureCards => {
      dispatch({ type: 'GET_ADVENTURE_CARDS_COMPLETED', adventureCards });
      return adventureCards;
    });
  };
}
