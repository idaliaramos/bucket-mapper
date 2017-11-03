// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function updateDestinationCard(id, changes) {
  console.log(id, 'this is the id');

  return fetch(`${env.API_BASE_URL}/destinations/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(changes)
  }).then(response => response.json());
}
