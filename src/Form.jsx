import React, { useState } from "react";
import { fetchData } from "./Api.jsx";
import ResponseContent from "./ResponseContent.jsx";
const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    // const params = {
    //   url: "https://httpbin.org/post",
    //   method: "post",
    //   data: { name, password },
    // };
    const params = {
      name,
      password,
    };
    const answer = await fetchData(params);
    setResponse(answer);
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
      {loading ? "Loading..." : <ResponseContent response={response} />}
    </div>
  );
};

export default Form;
