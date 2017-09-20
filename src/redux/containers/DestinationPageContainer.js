import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import createDestinationThunk from '../thunks/createDestinationThunk';
// import DestinationFormComponent from '../components/destination/DestinationFormComponent';
import DestinationsPage from '../../components/destination/DestinationsPage';
import getDestinationCardsThunk from '../thunks/getDestinationCardsThunk';
//
//impor thunks
// import createDestinationThunk from '../thunks/createDestinationThunk';

function mapStateToProps(state, ownProps) {
  // console.log(state.destinationCards, 'this REAL');
  // console.log(ownProps, 'this is oprops');
  // console.log(state.destinations, ' in 00000 destinations');
  return {
    destinationCards: state.destinationCards
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getDestinationCardsThunk()),
    //transfer function that dispatch to the root reducer
    onSaveDestination: name => dispatch(createDestinationThunk(name))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(DestinationsPage);
