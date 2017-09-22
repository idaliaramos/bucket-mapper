import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import AdventurePage from '../../components/layout/AdventurePage';
//import thunks
import createAdventureCardThunk from '../thunks/createAdventureCardThunk';
import getAdventureCardsThunk from '../thunks/getAdventureCardsThunk';
import updateAdventureCardThunk from '../thunks/updateAdventureCardThunk';
import deleteAdventureCardThunk from '../thunks/deleteAdventureCardThunk';
import getDestinationThunk from '../thunks/getDestinationThunk';

function mapStateToProps(state, ownProps) {
  const { destinationId } = ownProps.match.params;
  return {
    destination: state.destinationCards.find(
      destination => destination.id === destinationId
    ),
    adventureCards: state.adventureCards,
    onShow: state.onShow
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const { destinationId } = ownProps.match.params;
  return {
    onMount: () =>
      dispatch(getDestinationThunk(destinationId)).then(destination =>
        dispatch(getAdventureCardsThunk(destination.nid))
      ),
    onCreateTripData: tripData => dispatch(createAdventureCardThunk(tripData)),
    onUpdateTripData: (tripData, id) => {
      dispatch(updateAdventureCardThunk(tripData, id));
    },
    onShowAdventureCard: () => dispatch({ type: 'SHOW_ADVENTURE_CARD' }),
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
