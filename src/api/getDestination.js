import env from '../env';
//gets all teh destination cards for the user
export default function getDestination(destinationId) {
  const token = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    if (response.status !== 200 && response.status !== 201) {
      throw new Error();
    }
    console.log(response, 'this is the repsonse ');
    return response.json();
  });
  //TODO:
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
