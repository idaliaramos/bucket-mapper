import createDestinationCard from '../../api/createDestinationCard';

export default function createDestinationCardThunk(destination) {
  return (dispatch, getState, env) => {
    return createDestinationCard(destination).then(destinationCard => {
      dispatch({
        type: 'CREATE_DESTINATION_CARD_COMPLETED',
        destinationCard: destinationCard
      });
      return destinationCard;
    });
  };
}
