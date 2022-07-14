import React from "react";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import routes from "./routesList";

const PageRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        return <Route exact path={route.path} element={<route.component />} />;
      })}
    </Routes>
  );
};

export default PageRoutes;
