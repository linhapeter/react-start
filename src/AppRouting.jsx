import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Examples from "./pages/examples/Examples";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Form from "./pages/form/Form";
import Chat from "./pages/messenger/Chat";

const AppRouting = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/examples" element={<Examples />}>
      <Route path="example-1" element={<Form />} />
      <Route path="example-2" element={<Chat />} />
    </Route>
    <Route path="/blog" element={<Blog />} />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
  </Routes>
);

export default AppRouting;
