import React, { useState } from "react";
import { fetchData } from "../../api/api.js";
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

  const handleNameFieldChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordFieldChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameFieldChange} />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordFieldChange}
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
