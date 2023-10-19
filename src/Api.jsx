import axios from "axios";

const LOGN_API = "https://httpbin.org/post";

export const fetchData = async (params) =>
  axios
    .post(LOGN_API, params)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
      throw error;
    });
