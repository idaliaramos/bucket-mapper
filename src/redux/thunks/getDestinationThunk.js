import getDestination from '../../api/getDestination';
//change to getDestinationCards?
export default function getDestinationThunk(destinationId) {
  return (dispatch, getState, env) => {
    return getDestination(destinationId).then(destination => {
      dispatch({ type: 'GET_DESTINATION_COMPLETED', destination });
      return destination;
    });
    // .catch(error => {
    //   dispatch({ type: 'GET_MESSAGES_FAILED' });
    // });
  };
}
