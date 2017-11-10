// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function getAdventureCards(destinationId) {
  const token = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}/adventures`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(adventureCards => {
      //console.log(adventureCards);
      return adventureCards.map(adventureCard => {
        return {
          id: adventureCard.id,
          category: adventureCard.category,
          name: adventureCard.name,
          description: adventureCard.description,
          location: adventureCard.location,
          url: adventureCard.url
        };
      });
    });
}
