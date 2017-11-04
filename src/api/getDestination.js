import recordToDestination from './utils/recordToDestinationCard';
import env from '../env';
export default function getDestination(destinationId, token) {
  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    console.log(response, 'this is the repsonse ');
    return response.json();
  });
}
