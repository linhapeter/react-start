import { useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = async (url, method = "get", body = null) => {
    try {
      setLoading(true);

      const config = { method, url };

      if (body) {
        config.data = body;
      }
      const response = await axios(config);
      setData(response.data.json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};

export default Api;
