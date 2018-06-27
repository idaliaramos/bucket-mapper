import env from '../env';
export default function loginUser(attributes) {
  return fetch(`${env.API_BASE_URL}/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  }).then(response => response.json());
}
