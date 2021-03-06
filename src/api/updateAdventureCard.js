// import recordToAdventreCard from './utils/recordToAdventureCard';
import env from '../env';
export default function updateAdventureCard(id, changes) {
  console.log(id, changes, 'id, changes in the adventure card');
  const token = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/adventures/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(changes)
  }).then(response => response.json());
}
