import React from "react";
import PropTypes from "prop-types";
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

ResponseContent.propTypes = {
  response: PropTypes.shape({
    json: PropTypes.shape({
      name: PropTypes.string,
      password: PropTypes.string,
    }),
  }),
};

ResponseContent.defaultProps = {
  response: {
    json: {
      name: "",
      password: "",
    },
  },
};

export default ResponseContent;
