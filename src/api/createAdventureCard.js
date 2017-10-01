export default function createAdventureCard(tripData, { databaseId, token }) {
  return fetch('https://api.airtable.com/v0/appgZL4JHAEkVQWiM/cards', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer key3qboRJqEMAfhtg',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: tripData
    })
  })
    .then(response => response.json())
    .then(record => {
      return {
        id: record.id,
        location: record.fields.location,
        catergory: record.fields.catergory,
        image: record.fields.image,
        body: record.fields.body
      };
    });
  //or return the record, which is the nid and the name
}

/*
{
 id: 123213,
 name: 'adfadfd'
}
*/

//
// fetch('https://api.airtable.com/v0/appgZL4JHAEkVQWiM/cards', {
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
