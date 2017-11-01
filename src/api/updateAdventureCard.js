// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function updateAdventureCard(
  id,
  changes,
  { databaseId, token }
) {
  console.log(id, changes, 'id, changes');
  return fetch(
    // `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/adventures/${id}`,
    `${env.API_BASE_URL}/adventures/${id}`,
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
      // console.log(record, 'thisrecord');
      return {
        id: record.id,
        location: record.fields.location,
        catergory: record.fields.catergory,
        image: record.fields.image,
        body: record.fields.body
      };
    });
}
