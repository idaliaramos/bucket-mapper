import env from '../env';
//creates a user account
export default function createUser(attributes) {
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  }).then(response => {
  if (response.status !== 200 && response.status !== 201) {
    // return undefined;
    console.log("not a 200 this isi a test");
    // throw new Error()
    // return;
    //check

    return response.json();
  }
})
}
