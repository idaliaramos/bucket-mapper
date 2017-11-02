import recordToDestinationCard from './utils/recordToDestinationCard';
import env from '../env';
export default function createDestinationCard(
  destination,
  { databaseId, token }
) {
  return fetch(
    // 'https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations',
    `${env.API_BASE_URL}/users/1/destinations`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: destination.name,
        url: destination.url
      })
    }
  )
    .then(response => response.json())
    .then(record => {
      console.log(record, 'this is the record');
      return record;
    });
}
