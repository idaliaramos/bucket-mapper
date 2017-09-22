export default function deleteCard(id) {
  return fetch(
    `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations/${id}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer key3qboRJqEMAfhtg',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {}
      })
    }
  ).then(response => response.json());
}
