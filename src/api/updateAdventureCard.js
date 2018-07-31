import env from "../env";
//makes an update to the adventure card
export default function updateAdventureCard(id, changes) {
  const token = localStorage.getItem("token");
  return fetch(`${env.API_BASE_URL}/adventures/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(changes)
  }).then(response => response.json());
}
