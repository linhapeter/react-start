import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./config.js";

const renderedRoutes = routes.map((route, index) => (
  <Route key={index} path={route.path} Component={route.component}>
    {route.children &&
      route.children.map((childRoute, childIndex) => (
        <Route
          key={childIndex}
          path={childRoute.path}
          Component={childRoute.component}
        />
      ))}
  </Route>
));

const Routing = () => <Routes>{renderedRoutes}</Routes>;

export default Routing;
