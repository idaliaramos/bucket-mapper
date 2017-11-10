// import recordToDestinationCard from './utils/recordToDestinationCard';
import env from '../env';
import decode from 'jwt-decode';
export default function getDestinationCards() {
  const token = localStorage.getItem('token');
  const { sub: userId } = decode(token);
  //console.log(token, 'this is the token');
  //console.log('hi', env.API_BASE_URL);
  return fetch(`${env.API_BASE_URL}/users/${userId}/destinations`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    if (response.status === 401) {
      throw new Error('Authentication Error');
    }
    //console.log(response, 'this is the resonse');
    return response.json();
  });
}
