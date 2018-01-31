import env from '../env';
import decode from 'jwt-decode';
export default function createDestinationCard(destination) {
  const token = localStorage.getItem('token');
  const { sub: userId } = decode(token);
  return fetch(`${env.API_BASE_URL}/users/${userId}/destinations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name: destination.name,
      url: destination.url
    })
  })
    .then(response => response.json())
    .then(record => {
      console.log(record, 'this is the record');
      return record;
    });
}
