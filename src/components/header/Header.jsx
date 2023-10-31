import React from "react";
import { Link } from "react-router-dom";
import "../../style/header.scss";
import AppRouting from "../../AppRouting";

const routes = [
  { id: 0, path: "/", label: "Home Page" },
  { id: 1, path: "/examples", label: "Examples" },
  { id: 2, path: "/blog", label: "Blog" },
  { id: 3, path: "/about", label: "About" },
  { id: 4, path: "/login", label: "Login" },
];

const renderedLinks = routes.map((route, id) => (
  <li className="nav-links__li" key={id}>
    <Link className="nav-links__a" to={route.path}>
      {route.label}
    </Link>
  </li>
));

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">{renderedLinks}</ul>
      </nav>
      <AppRouting></AppRouting>
    </div>
  );
};

export default Header;
