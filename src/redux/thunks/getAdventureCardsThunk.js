import getAdventureCards from '../../api/getAdventureCards';

export default function getAdventureCardsThunk(destinationNid) {
  return (dispatch, getState, env) => {
    return getAdventureCards(destinationNid)
      .then(adventureCards => {
        if (!adventureCards) {
          dispatch({ type: 'GET_ADVENTURE_CARDS_FAILED' });
        }
        dispatch({ type: 'GET_ADVENTURE_CARDS_COMPLETED', adventureCards });
        return adventureCards;
      })
      .catch(error =>
        dispatch({ type: 'GET_ADVENTURE_CARDS_FAILED', fail: true })
      );
  };
}
