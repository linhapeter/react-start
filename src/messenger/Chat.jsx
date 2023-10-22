import React, { useState } from "react";
import Message from './Message';

const Chat = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  const changeInputMessage = (e) => {
    setMessageInput(e.target.value);
    console.log(messageInput);
  }

  const sendMessageOnEnter = (e) => {
    if (e.key === 'Enter') {
      setMessages([...messages, { text: messageInput }]);
      setMessageInput("");
      console.log(messages);
      e.target.value = "";
    }
  }

  return (
    <div className="chat">
      <div className="message-list">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} />
        ))}
      </div>
      <input className="input-message" type="text" onChange={changeInputMessage} onKeyPress={sendMessageOnEnter} />
    </div>

  );
};

export default Chat;
