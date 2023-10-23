import React from "react";
import Form from "./form/Form";
import Chat from "./messenger/Chat";
import "./style.css";
const App = () => (
  <div>
    <h1>Login Form</h1>
    <Form />
    <h1>Chat</h1>
    <Chat />
  </div>
);

export default App;
