import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Message from "./Message";

const Chat = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  const changeInputMessage = (e) => {
    setMessageInput(e.target.value);
    console.log(messageInput);
  };

  const sendMessageOnEnter = (e) => {
    if (e.key === "Enter") {
      setMessages([...messages, { id: uuidv4(), text: messageInput }]);
      setMessageInput("");
      console.log(messages);
      e.target.value = "";
    }
  };

  const renderedMessages = messages.map((message) => (
    <Message key={message.id} text={message.text} />
  ));

  return (
    <div className="chat">
      <div className="message-list">{renderedMessages}</div>
      <input
        className="input-message"
        type="text"
        onChange={changeInputMessage}
        onKeyPress={sendMessageOnEnter}
      />
    </div>
  );
};

export default Chat;
