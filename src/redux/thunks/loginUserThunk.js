import loginUser from '../../api/loginUser';

//make getuser
import getUser from '../../api/getUser';
const decode = require('jwt-decode');
export default function loginUserThunk(attributes) {
  console.log(attributes, 'these are the attributes in the thunk');
  return async (dispatch, getState, env) => {
    try {
      let userInfo = {};
      const token = await loginUser(attributes);
      localStorage.setItem('token', token.token);
      const { sub: userId } = decode(token.token);
      userInfo.token = token.token;
      const user = await getUser(userId, {
        token
      });
      userInfo.user = user;
      console.log(userInfo, 'this is an object with my userinfo');
      console.log(user, userId, 'this is the user');
      dispatch({ type: 'LOG_IN_COMPLETED', userInfo });
      //or
      // dispatch({ type: 'LOG_IN_COMPLETED', user, token });
      dispatch({ type: 'GET_DESTINATION_CARDS_COMPLETED', userInfo });
      return userInfo;
    } catch (error) {
      dispatch({ type: 'FAILED' });
    }
  };
}
