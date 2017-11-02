// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function getAdventureCards(destinationId) {
  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}/adventures`)
    .then(response => response.json())
    .then(adventureCards => {
      return adventureCards.map(adventureCard => {
        console.log(adventureCard, 'thisis the adventurecard');
        return {
          id: adventureCard.id,
          category: adventureCard.category,
          body: adventureCard.description,
          location: adventureCard.location,
          image: adventureCard.url
        };
      });
    });
}

// export default function getAdventureCards(destinationNid) {
//   const filter = destinationNid
//     ? `?filterByFormula=(%7Bdestination%7D%3D%27${destinationNid}%27)`
//     : '';
//
//   return fetch(`https://api.airtable.com/v0/appgZL4JHAEkVQWiM/adventures${filter}`, {
//     headers: {
//       Authorization: 'Bearer key3qboRJqEMAfhtg'
//     }
//   })
//     .then(response => response.json())
//     .then(adventureCards => {
//       return adventureCards.records.map(adventureCard => {
//         return {
//           id: adventureCard.id,
//           category: record.category,
//           body: record.description,
//           location: record.location,
//           image: record.image
//         };
//       });
//     });
// }
