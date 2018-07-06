import env from '../env';
import decode from 'jwt-decode';
export default function deleteAdventureCard(id) {
  const token = localStorage.getItem('token');
  const { sub: userId } = decode(token);
  return fetch(
    `${env.API_BASE_URL}/adventures/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify()
    }
  ).then(response => response.json());
}
