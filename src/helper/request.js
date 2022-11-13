import axios from "axios";

export default async function request(method, url, body) {
  const options = {
    method,
    url,
    data: body,
  };

  return await axios
    .request(options)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
