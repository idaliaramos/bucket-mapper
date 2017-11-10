import env from '../env';
export default function createAdventureCard(tripData, id) {
  //console.log(id, '<<<<<<<<<<this is the id');
  const token = localStorage.getItem('token');
  return fetch(
    // 'https://api.airtable.com/v0/appgZL4JHAEkVQWiM/adventures',
    `${env.API_BASE_URL}/destinations/${id}/adventures`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        // id: tripData.id,
        location: tripData.location,
        url: tripData.url,
        // category: tripData.category,

        // userId: tripData.userId,
        description: tripData.description
        // category: tripData.category
      })
    }
  ).then(response => {
    console.log(response.json, 'this is the response');

    return response.json();
  });
  // .then(record => {
  //   return {
  //     id: record.id,
  //     location: record.fields.location,
  //     category: record.fields.category,
  //     image: record.fields.image,
  //     body: record.fields.body
  //   };
  // });
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
