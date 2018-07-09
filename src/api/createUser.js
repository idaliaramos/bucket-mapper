// import env from '../env';
// export default function createUser(attributes) {
//   console.log(env.API_BASE_URL, 'base url')
//   return fetch(`${env.API_BASE_URL}/users`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(attributes)
//   }).then(response => response.json());
// }

import env from '../env';
export default function createUser(attributes) {
  console.log(env.API_BASE_URL, 'base url')
  return fetch(`${env.API_BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(attributes)
  }).then(response => {
  console.log(response.status, "this is the resp on get adventureCards");
  if (response.status !== 200 && response.status !== 201) {
    // return undefined;
    console.log("not a 200 this isi a test");
    // throw new Error()
    // return;
    //check
  } else {
    return response.json();
  }
})
}
