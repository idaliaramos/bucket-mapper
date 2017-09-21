import getAdventureCards from '../../api/getAdventureCards';

export default function getAdventureCardsThunk() {
  return (dispatch, getState, env) => {
    return getAdventureCards().then(adventureCards => {
      dispatch({ type: 'GET_ADVENTURE_CARDS_COMPLETED', adventureCards });
      return adventureCards;
    });
  };
}
