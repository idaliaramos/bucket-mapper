import recordToDestination from './utils/recordToDestinationCard';
import env from '../env';
export default function getDestination(destinationId) {
  return fetch(
    // `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations/${destinationId}`,
    `${env.API_BASE_URL}/destinations/${destinationId}`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(response => {
    console.log(response, 'this is the repsonse ');
    return response.json();
  });
}
