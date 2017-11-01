// import recordToDestinationCard from './utils/recordToDestinationCard';
import env from '../env';
export default function getDestinationCards() {
  // REACT_APP_API_BASE_URL => http://localhost:8000
  return fetch(`${env.API_BASE_URL}/users/1/destinations`, {}).then(response =>
    response.json()
  );
}

// fetch('https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations', {
//   headers: {
//     Authorization: 'Bearer key3qboRJqEMAfhtg'
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data));

// fetch("https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations?", {
//     headers: {
//       Authorization: "Bearer key3qboRJqEMAfhtg"
//     }
//   })
//     .then(response => response.json()).then(data => console.log(data))
