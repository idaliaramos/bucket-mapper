import env from '../env';
const isEmpty = require('lodash.isempty');
//gets the specified user
export default async function getUser(id, { baseUrl, token }) {
  try {
    const headers = isEmpty(token.token)
      ? {}
      : { Authorization: `Bearer ${token.token}` };
    const response = await fetch(`${env.API_BASE_URL}/users/${id}`, {
      headers
    });
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);
    return body;
  } catch (error) {
    if (error.message.startsWith('UserService.ERROR_')) throw error;
    throw new Error('UserService.ERROR_UNEXPECTED');
  }
}
