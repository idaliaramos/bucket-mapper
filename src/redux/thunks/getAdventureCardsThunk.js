import getAdventureCards from '../../api/getAdventureCards';

export default function getAdventureCardsThunk(destinationNid) {
  console.log(destinationNid, 'this is de NID');
  return (dispatch, getState, env) => {
    return getAdventureCards(destinationNid)
      .then(adventureCards => {
        console.log(adventureCards, 'these are the adventureCards');
        if (!adventureCards) {
          console.log('i am here');
          //michael
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
// {
//   fail: true;
// }
