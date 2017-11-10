import env from '../env';
import decode from 'jwt-decode';
export default function deleteCard(id) {
  const token = localStorage.getItem('token');
  const { sub: userId } = decode(token);
  //console.log(userId, token, id, 'userid, token, id');
  return fetch(
    // `https://api.airtable.com/v0/appgZL4JHAEkVQWiM/destinations/${id}`,
    `${process.env.REACT_APP_API_BASE_URL}/destinations/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify()
    }
  ).then(response => {
    //console.log('this is the response', response.json());
  });
}
