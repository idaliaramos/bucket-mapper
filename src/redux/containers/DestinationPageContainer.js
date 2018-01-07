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
    destinationCards: state.destinationCards,
    fail: state.fail
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log(ownProps, 'this ownprops');
  return {
    onMount: () => dispatch(getDestinationCardsThunk(ownProps)),
    //maybe not on mount, need t pass the id
    onSaveDestination: destination =>
      dispatch(createDestinationThunk(destination)),
    onUpdateDestination: (id, changes) => {
      dispatch(updateDestinationCardThunk(id, changes));
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
