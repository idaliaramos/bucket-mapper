import env from "../env";
import decode from "jwt-decode";
// get all of the destination cards for the specified user
export default function getDestinationCards() {
  const token = localStorage.getItem("token");
  const { sub: userId } = decode(token);
  return fetch(`${env.API_BASE_URL}/users/${userId}/destinations`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    if (response.status === 401) {
      throw new Error("Authentication Error");
    }
    return response.json();
  });
}
