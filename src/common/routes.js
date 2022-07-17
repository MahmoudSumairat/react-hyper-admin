import React from "react";
import { Route, Routes } from "react-router";
import routes from "./routesList";

const PageRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
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
