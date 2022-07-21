import React from "react";
import { Route, Routes } from "react-router";
import routes from "./routesList";

const PageRoutes = ({ isAuthenticated }) => {
  return (
    <Routes>
      {routes(isAuthenticated).map((route) => {
        return (
          <Route
            key={route.name}
            exact
            path={route.path}
            element={<route.component />}
          />
        );
      })}
    </Routes>
  );
};

export default PageRoutes;
