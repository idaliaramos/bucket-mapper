import env from '../env';
export default function createAdventureCard(tripData, id) {
  const token = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/destinations/${id}/adventures`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      location: tripData.location,
      url: tripData.url,
      description: tripData.description
      // category: tripData.category
    })
  }).then(response => {
    console.log(response.json, 'this is the response');

    return response.json();
  });
}
