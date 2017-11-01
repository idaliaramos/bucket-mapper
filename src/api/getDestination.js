import recordToDestination from './utils/recordToDestinationCard';
import env from '../env';
export default function getDestination(destinationId) {
  return fetch(
    // `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations/${destinationId}`,
    `${env.API_BASE_URL}/users/${destinationId}/destination/${destinationId}`,
    {
      // headers: {
      //   Authorization: 'Bearer key3qboRJqEMAfhtg'
      // }
    }
  )
    .then(response => response.json())
    .then(recordToDestination);
}
