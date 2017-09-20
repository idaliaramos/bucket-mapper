// import recordToCard from './utils/recordToCard';

export default function createDestinationCard(name, { databaseId, token }) {
  return fetch(
    'https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinationBoard?',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer key3qboRJqEMAfhtg',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: name
      })
    }
  )
    .then(response => response.json())
    .then(record => record.name);
  //or return the record, which is the nid and the name
}
//
// fetch('https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinationBoard?', {
//   method: 'POST',
//   headers: {
//     Authorization: 'Bearer key3qboRJqEMAfhtg',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     fields: {name: "Iceland"}
//   })
// })
//  .then(response => response.json())
//  .then(record => {
//   console.log(record.fields.name);
// });
