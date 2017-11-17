// import recordToAdventureCard from './utils/recordToAdventureCard';
import env from '../env';
export default function getAdventureCards(destinationId) {
  const token = localStorage.getItem('token');

  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}/adventures`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      console.log(response.status, 'this is the resp on get adventureCards');
      if (response.status !== 200 && response.status !== 201) {
        // return undefined;
        console.log('not a 200');
        // throw new Error()
        // return;
      } else {
        return response.json();
      }
    })
    .then(adventureCards => {
      // if (!adventureCards) {
      //   console.log('there are no adventureCards');
      //   // throw new Error();
      // }
      console.log(adventureCards);
      return adventureCards.map(adventureCard => {
        return {
          id: adventureCard.id,
          category: adventureCard.category,
          name: adventureCard.name,
          description: adventureCard.description,
          location: adventureCard.location,
          url: adventureCard.url
        };
      });
    });
  // .catch(error){
  //
  // };
}
