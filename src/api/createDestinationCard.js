import recordToDestinationCard from './utils/recordToDestinationCard';
import env from '../env';
export default function createDestinationCard(
  destination,
  { databaseId, token }
) {
  return fetch(
    // 'https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations',
    `${env.REACT_APP_API_BASE_URL}/users/1/destinations`,
    {
      method: 'POST',
      // headers: {
      //   Authorization: 'Bearer key3qboRJqEMAfhtg',
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify({
        fields: destination
      })
    }
  )
    .then(response => response.json())
    .then(record => {
      return {
        id: record.id,
        name: record.fields.name
      };
    });
}
