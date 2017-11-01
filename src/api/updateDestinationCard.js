// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function updateDestinaCard(id, changes, { databaseId, token }) {
  return fetch(
    // `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/adventureBoard/${id}`,
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
        name: record.fields.name
      };
    });
}
