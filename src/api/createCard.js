// import recordToDestinationCard from './utils/recordToDestinationCard';
//
// export default function createCard(input, { databaseId, token }) {
//   return fetch(`https://api.airtable.com/v0/${databaseId}/adventures`, {
//     method: 'POST',
//     headers: {
//       Authorization: `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       fields: input
//     })
//   })
//     .then(response => {
//       response.json();
//     })
//     .then(recordToDestinationCard);
// }
