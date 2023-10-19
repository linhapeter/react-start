import React, { useState } from "react";
import { fetchData } from "./Api.jsx";
import ResponseContent from "./ResponseContent.jsx";
const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();

    setLoading(true);
    const params = {
      name,
      password,
    };
    const answer = await fetchData(params);
    setResponse(answer);
    setLoading(false);
  };

  const hanndleNameFieldChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const hanndlePasswordFieldChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input type="text" value={name} onChange={hanndleNameFieldChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={hanndlePasswordFieldChange}
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
