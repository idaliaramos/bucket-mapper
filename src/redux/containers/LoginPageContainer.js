// sent from Form
//
// //ub tge processes/thunkgs have a create user with credentials
//
// decode token by using decode jwt ,
// // the payload will have the information about the
// const {sub: userId}= payload, both renaming and assinging
// add functionality for token;
// const headers = token? $ {authorization: bearer ${token}  : {} }
// put user in the store, app rerenders and can render different things
// //how to do logged in and
// in the default page layout,
// if authenticated user, logged in as authenticated user, else render login/register
// //how do i keep the user logged in upon refresh?
//
// - local storage
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import LoginPage from '../../components/auth/LoginPage';
import loginUserThunk from '../thunks/loginUserThunk';
// import InitializeLoginPageThunk from '../thunks/InitializeLoginPageThunk';
// import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';

function mapStateToProps(state) {
  return {
    // authenticatedUser: selectAuthenticatedUser(state),
    //some error handling
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  console.log('in the log in page container');

  return {
    async onLogin(attributes) {
      console.log(attributes, 'this is athe attributes');
      await dispatch(loginUserThunk(attributes));
      ownProps.history.push('/destinations');
    }
  };
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const addLifecycle = lifecycle({
  componentDidMount() {
    console.log('i am in the login page');
  }
});

export default connectToStore(addLifecycle(LoginPage));
