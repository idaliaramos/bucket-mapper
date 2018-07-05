import env from '../env';
export default function createUser(attributes) {
  console.log(env.API_BASE_URL, 'base url')
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  }).then(response => response.json());
}
