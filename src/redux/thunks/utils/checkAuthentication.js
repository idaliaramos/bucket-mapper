import decode from 'jwt-decode';

import { isEmpty } from '../utils/LangUtils';
import getUser from '../api/getUser';

export default async function checkAuthentication({ baseUrl }) {
  try {
    const token = localStorage.getItem('token');

    if (isEmpty(token)) {
      localStorage.removeItem('token');
      return null;
    }

    const { sub: userId, exp: timeExpires } = decode(token);

    if (timeExpires * 1000 < Date.now()) {
      localStorage.removeItem('token');
      return null;
    }

    const user = await getUser(userId, {
      baseUrl,
      token
    });

    return {
      token,
      user
    };
  } catch (error) {
    console.error(error); // eslint-disable-line no-console
    localStorage.removeItem('token');
    return null;
  }
}
