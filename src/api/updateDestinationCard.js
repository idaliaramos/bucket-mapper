import recordToDestinationCard from './utils/recordToDestinationCard';

export default function updateDestinationCard(
  id,
  changes,
  { databaseId, token }
) {
  return fetch(
    `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinationBoard/${id}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer key3qboRJqEMAfhtg',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: changes
      })
    }
  )
    .then(response => response.json())
    .then(record => {
      console.log(record, 'thisrecord');
      return {
        id: record.id,
        name: record.fields.name
      };
    });
}
