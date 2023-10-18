import axios from "axios";

export const fetchData = async (params) =>
  axios(params)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log("error", error);
      throw error;
    });
