import axios from "axios";

const globalSearch = (URL) => {
    console.log(URL)
  return axios({
    method: "GET",
    url: URL,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin":"*"
    },
  });
};

export { globalSearch };
