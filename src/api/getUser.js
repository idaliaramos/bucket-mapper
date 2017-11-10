// import { isEmpty } from '../utils/LangUtils';
import env from '../env';
const isEmpty = require('lodash.isempty');
export default async function getUser(id, { baseUrl, token }) {
  console.log(token, 'this is the token');
  console.log(token.token, 'this is the modified token');
  try {
    const headers = isEmpty(token.token)
      ? {}
      : { Authorization: `Bearer ${token.token}` };
    const response = await fetch(`${env.API_BASE_URL}/users/${id}`, {
      headers
    });
    console.log(headers, response, 'headers and reponse');
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);
    console.log(body, 'this is the body');
    return;
  } catch (error) {
    if (error.message.startsWith('UserService.ERROR_')) throw error;
    throw new Error('UserService.ERROR_UNEXPECTED');
  }
}
