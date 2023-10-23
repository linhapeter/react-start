import React from "react";
import PropTypes from "prop-types";
const Message = ({ text }) => <span className="message">{text}</span>;

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
