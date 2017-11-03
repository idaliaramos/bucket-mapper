// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function getAdventureCards(destinationId) {
  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}/adventures`)
    .then(response => response.json())
    .then(adventureCards => {
      return adventureCards.map(adventureCard => {
        return {
          id: adventureCard.id,
          category: adventureCard.category,
          name: adventureCard.name,
          body: adventureCard.description,
          location: adventureCard.location,
          image: adventureCard.url
        };
      });
    });
}
