import React from "react";
const ResponseContent = ({ response }) => (
  <div>
    {response && response.json && (
      <div>
        <strong>Response:</strong>
        <ul>
          <li>Name: {response.json.name}</li>
          <li>Password: {response.json.password}</li>
        </ul>
      </div>
    )}
  </div>
);

export default ResponseContent;
