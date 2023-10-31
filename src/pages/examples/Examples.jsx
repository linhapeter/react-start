import React from "react";
import { Link, Outlet } from "react-router-dom";
const Examples = () => (
  <div>
    <ul>
      <li>
        <Link to="example-1">Form</Link>
      </li>
      <li>
        <Link to="example-2">Messenger</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default Examples;
