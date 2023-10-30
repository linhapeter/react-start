import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";
const App = () => (
  <div>
    <Router>
      <Header></Header>
    </Router>
  </div>
);

export default App;
