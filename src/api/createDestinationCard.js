import recordToDestinationCard from './utils/recordToDestinationCard';

export default function createDestinationCard(
  destination,
  { databaseId, token }
) {
  return fetch('https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer key3qboRJqEMAfhtg',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: destination
    })
  })
    .then(response => response.json())
    .then(record => {
      return {
        id: record.id,
        name: record.fields.name
      };
    });
}
