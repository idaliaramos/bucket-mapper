import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import AdventurePage from '../../components/layout/AdventurePage';
//import thunks
import createAdventureCardThunk from '../thunks/createAdventureCardThunk';
import getAdventureCardsThunk from '../thunks/getAdventureCardsThunk';

function mapStateToProps(state, ownProps) {
  return {
    adventureCards: state.adventureCards
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getAdventureCardsThunk()),
    onSaveTripData: tripData => dispatch(createAdventureCardThunk(tripData))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(AdventurePage);
