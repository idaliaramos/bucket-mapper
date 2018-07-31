import env from "../env";
//makes an update to the destination cards
export default function updateDestinationCard(id, changes) {
  const token = localStorage.getItem("token");
  return fetch(`${env.API_BASE_URL}/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(changes)
  })
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}
