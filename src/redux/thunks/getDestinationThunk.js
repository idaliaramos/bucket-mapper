import getDestination from '../../api/getDestination';
//change to getDestinationCards?
export default function getDestinationThunk(destinationId) {
  return (dispatch, getState, env) => {
    return getDestination(destinationId)
      .then(destination => {
        if (!destination) {
          dispatch({ type: 'GET_DESTINATION_FAILED' });
        }
        dispatch({ type: 'GET_DESTINATION_COMPLETED', destination });
        return destination;
      })
      .catch(error => {
        return error;
      });
  };
}
