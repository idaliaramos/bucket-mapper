export default function getAdventureCards() {
  return fetch('https://api.airtable.com/v0/appgZL4JHAEkVQWiM/cards?', {
    headers: {
      Authorization: 'Bearer key3qboRJqEMAfhtg'
    }
  })
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
