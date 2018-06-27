import updateDestinationCard from '../../api/updateDestinationCard';
//
export default function updateDestinationCardThunk(id, changes) {
  console.log(id, changes, '<<<<<<<<<<<<<intheTHUNK');
  return (dispatch, getState, env) => {
    return updateDestinationCard(id, changes).then(destinationCard => {
      console.log(destinationCard, 'this is the des card');
      dispatch({
        type: 'UPDATED_DESTINATION_CARD_COMPLETED',
        destinationCard: destinationCard
      });

      return destinationCard;
    });
  };
}
