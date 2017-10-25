// import recordToAdventureCard from './utils/recordToAdventureCard';
export default function getAdventureCards(destinationNid) {
  const filter = destinationNid
    ? `?filterByFormula=(%7Bdestination%7D%3D%27${destinationNid}%27)`
    : '';

  return fetch(
    `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/adventures${filter}`,
    {
      headers: {
        Authorization: 'Bearer key3qboRJqEMAfhtg'
      }
    }
  )
    .then(response => response.json())
    .then(adventureCards => {
      return adventureCards.records.map(adventureCard => {
        return {
          id: adventureCard.id,
          category: adventureCard.fields.category,
          body: adventureCard.fields.body,
          location: adventureCard.fields.location,
          image: adventureCard.fields.image
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
//           category: adventureCard.fields.category,
//           body: adventureCard.fields.body,
//           location: adventureCard.fields.location,
//           image: adventureCard.fields.image
//         };
//       });
//     });
// }
