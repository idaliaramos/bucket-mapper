import getDestinationCards from '../../api/getDestinationCards';

export default function getDestinationCardsThunks(props) {
  return async (dispatch, getState, env) => {
    try {
      const destinationCards = await getDestinationCards();

      dispatch({ type: 'GET_DESTINATION_CARDS_COMPLETED', destinationCards });
    } catch (error) {
      console.log(error, 'this is the eroor in the thunk');
      if (
        error.message === 'Authentication Error' ||
        error.message === 'Invalid token specified'
      ) {
        props.history.push('/login');
        return;
      }
    }
  };
}
