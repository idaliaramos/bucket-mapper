import env from "../env";
import decode from "jwt-decode";
//deletes the destination card for the user
export default function deleteCard(id) {
  const token = localStorage.getItem("token");
  return fetch(`${env.API_BASE_URL}/destinations/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify()
  }).then(response => {
    response.JSON();
  });
}
