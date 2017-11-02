import updateDestinationCard from '../../api/updateDestinationCard';
//
export default function updateDestinationCardThunk(id, changes) {
  console.log(id, changes, '<<<<<<<<<<<<<intheTHUNK');
  return (dispatch, getState, env) => {
    return updateDestinationCard(id, changes).then(destinationCard => {
      dispatch({
        type: 'UPDATED_DESTINATION_CARD_COMPLETED',
        destinationCard: destinationCard
      });
      return destinationCard;
    });
  };
}
