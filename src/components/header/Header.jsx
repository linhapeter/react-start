import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import { ROUTES_LIST } from "../../routing/config"


const renderedLinks = ROUTES_LIST.map((route, id) => (
  <li className="nav-links__li" key={id}>
    <Link className="nav-links__a" to={route.path}>
      {route.value}
    </Link>
  </li>
));

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">{renderedLinks}</ul>
      </nav>
    </div>
  );
};

export default Header;
