import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import createDestinationThunk from '../thunks/createDestinationThunk';
// import DestinationFormComponent from '../components/destination/DestinationFormComponent';
import DestinationsPage from '../../components/destination/DestinationsPage';
import getDestinationCardsThunk from '../thunks/getDestinationCardsThunk';
import updateDestinationCardThunk from '../thunks/updateDestinationCardThunk';
import deleteDestinationCardThunk from '../thunks/deleteDestinationCardThunk';

//impor thunks
// import createDestinationThunk from '../thunks/createDestinationThunk';

function mapStateToProps(state, ownProps) {
  return {
    destinationCards: state.destinationCards
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getDestinationCardsThunk()),
    onSaveDestination: destination =>
      dispatch(createDestinationThunk(destination)),
    onUpdateDestination: (id, changes) => {
      dispatch(updateDestinationCardThunk(id, changes));
      // console.log('>>>', id, changes);
    },
    onDeleteDestination: id => dispatch(deleteDestinationCardThunk(id))
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(DestinationsPage);
