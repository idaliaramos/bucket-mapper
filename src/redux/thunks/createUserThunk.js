import createUser from '../../api/createUser';

export default function createUserThunk(attributes) {
  console.log(attributes, 'these are the attributes');
  return async (dispatch, getState, env) => {
    try {
      const user = await createUser(attributes, {
        baseUrl: env.API_BASE_URL
      });
      console.log(user, 'this is the user');
      dispatch({ type: 'CREATE_USER_COMPLETED', user });
      return user;
    } catch (error) {
      dispatch({ type: 'FAILED' });
    }
  };
}
