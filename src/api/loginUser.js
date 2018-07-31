import env from "../env";
//logs in user
export default function loginUser(attributes) {
  return fetch(`${env.API_BASE_URL}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(attributes)
  }).then(response => {
    console.log(response.status, "this is the response, ");
    if (response.status !== 200 && response.status !== 201) {
      // return undefined;
      console.log("not a 200 this isi a test");
      // throw new Error()
      // return;
      //check
    } else {
      return response.json();
    }
  });
}
