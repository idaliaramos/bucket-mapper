import env from '../env';
export default function deleteAdventureCard(id) {
  return fetch(
    // `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/adventures/${id}`,
    `${process.env.REACT_APP_API_BASE_URL}/adventures/${id}`,
    {
      method: 'DELETE',
      // headers: {
      //   Authorization: 'Bearer key3qboRJqEMAfhtg',
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify({
        fields: {}
      })
    }
  ).then(response => response.json());
}
