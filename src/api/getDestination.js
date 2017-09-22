import recordToDestination from './utils/recordToDestinationCard';

export default function getDestination(destinationId) {
  return fetch(
    `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations/${destinationId}`,
    {
      headers: {
        Authorization: 'Bearer key3qboRJqEMAfhtg'
      }
    }
  )
    .then(response => response.json())
    .then(recordToDestination);
}
