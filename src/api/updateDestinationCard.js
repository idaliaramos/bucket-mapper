// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function updateDestinationCard(id, changes) {
  //console.log(changes, 'changes');
  const token = localStorage.getItem('token');
  console.log(token, 'this is the token');
  console.log(id, 'this is the id');
  return fetch(`${env.API_BASE_URL}/destinations/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(changes)
  })
    .then(response => {
      //fix
      console.log(response, 'this is the response');
      return response.json();
    })
    .catch(error => console.log(error));
}
