import { compose, lifecycle } from "recompose";
import { connect } from "react-redux";
import AdventurePage from "../../components/layout/AdventurePage";
//import thunks
import createAdventureCardThunk from "../thunks/createAdventureCardThunk";
import getAdventureCardsThunk from "../thunks/getAdventureCardsThunk";
import updateAdventureCardThunk from "../thunks/updateAdventureCardThunk";
import deleteAdventureCardThunk from "../thunks/deleteAdventureCardThunk";
import getDestinationThunk from "../thunks/getDestinationThunk";
//mapStateToProps passes down the information from the store
function mapStateToProps(state, ownProps) {
  const { destinationId } = ownProps.match.params;
  return {
    destinationId,
    destination: state.destinationCards.find(
      destination => destination.id === destinationId
    ),
    adventureCards: state.adventureCards,
    destinationCards: state.destinationCards,
    onShow: state.onShow,
    fail: state.fail
  };
}
//mapDispatchToProps dispatches to change the store
function mapDispatchToProps(dispatch, ownProps) {
  const { destinationId } = ownProps.match.params;
  return {
    onMount: () =>

      dispatch(getDestinationThunk(destinationId, ownProps)).then(
        destination => {
          dispatch(getAdventureCardsThunk(destination.id));
        }
      ),
   //calls the thunk to create a new adventure card for the specific destination
    onCreateTripData: (tripData, destinationId) => {
      dispatch(createAdventureCardThunk(tripData, destinationId));
    },
  //dispatches to update the adventure card for the specific adventure
    onUpdateTripData: (tripData, id) => {
      dispatch(updateAdventureCardThunk(tripData, id));
    },
    //gets the adventures cards to show
    onShowAdventureCard: () => dispatch({ type: "SHOW_ADVENTURE_CARD" }),
    //deletes the specific adventure card with the id
    onDeleteAdventureCard: id => dispatch(deleteAdventureCardThunk(id))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(AdventurePage);
