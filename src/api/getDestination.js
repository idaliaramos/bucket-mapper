import env from '../env';
import ErrorPage from '../components/ErrorPage';
export default function getDestination(destinationId) {
  const token = localStorage.getItem('token');
  console.log(token, 'this is the token');
  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    console.log(response.status, 'reps in get destination');
    if (response.status !== 200 && response.status !== 201) {
      console.log('i am in the error dest get');
      throw new Error();
    }
    console.log(response, 'this is the repsonse ');
    return response.json();
  });
  // .catch(error){
  //   return undefined
  // };
}
//async version
// export default async function getDestination(destinationId) {
//   const token = localStorage.getItem('token');
//   try {
//     const response = await fetch(
//       `${env.API_BASE_URL}/destinations/${destinationId}`,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );
//     const body = await response.json();
//     if (body.error) throw new Error(body.message);
//     return body;
//   } catch (error) {
//     if (error.message.startsWith('DestinationService.ERROR_')) throw error;
//     throw new Error('DestinationService.ERROR_UNEXPECTED');
//   }
// }
