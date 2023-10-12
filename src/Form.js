import React, { useState } from "react";
// import ResponseComponent from './ResponseComponent';
import Api from "./Api.js";
const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { data: response, error, loading, fetchData } = Api();

  const submitForm = async (e) => {
    e.preventDefault();

    fetchData("https://httpbin.org/post", "post", { name, password });
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
      {loading ? (
        "Loading..."
      ) : (
        <div>
          {error && <div>Error: {error.message}</div>}
          {response && (
            <div>
              <strong>Response:</strong>
              <ul>
                <li>Name: {response.name}</li>
                <li>Password: {response.password}</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
