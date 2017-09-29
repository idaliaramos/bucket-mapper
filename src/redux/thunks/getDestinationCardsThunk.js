import getDestinationCards from '../../api/getDestinationCards';

export default function getDestinationCardsThunks() {
  return (dispatch, getState, env) => {
    return getDestinationCards().then(destinationCards => {
      dispatch({ type: 'GET_DESTINATION_CARDS_COMPLETED', destinationCards });
      return destinationCards;
    });
  };
}
