
import env from "../env";
//gets all of the adventure cards for the user
export default function getAdventureCards(destinationId) {
  const token = localStorage.getItem("token");

  return fetch(`${env.API_BASE_URL}/destinations/${destinationId}/adventures`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {

      if (response.status !== 200 && response.status !== 201) {
        console.log("not a 200");
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
