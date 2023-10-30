import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Examples from "../pages/examples/Examples";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Form from "../pages/examples/form/Form";
import Chat from "../pages/examples/messenger/Chat";
import "../style/header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li className="nav-links__li">
            <Link className="nav-links__a" to="/">
              Home Page
            </Link>
          </li>
          <li className="nav-links__li">
            <Link className="nav-links__a" to="/examples">
              Examples
            </Link>
          </li>
          <li className="nav-links__li">
            <Link className="nav-links__a" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-links__li">
            <Link className="nav-links__a" to="/about">
              About
            </Link>
          </li>
          <li className="nav-links__li">
            <Link className="nav-links__a" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>

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
    </div>
  );
};

export default Header;
