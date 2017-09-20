// import recordToDestinationCard from './utils/recordToDestinationCard';

export default function getDestinationCards() {
  return fetch(
    'https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinationBoard?',
    {
      headers: {
        Authorization: 'Bearer key3qboRJqEMAfhtg'
      }
    }
  )
    .then(response => response.json())
    .then(destinationCards => {
      return destinationCards.records.map(destinationCard => {
        return {
          id: destinationCard.id,
          nid: destinationCard.fields.nid,
          card: destinationCard.fields.cards,
          name: destinationCard.fields.name
        };
      });
    });
}

// fetch('https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinationBoard?', {
//   headers: {
//     Authorization: 'Bearer key3qboRJqEMAfhtg'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch("https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinationBoard?", {
//     headers: {
//       Authorization: "Bearer key3qboRJqEMAfhtg"
//     }
//   })
//     .then(response => response.json()).then(data => console.log(data))
