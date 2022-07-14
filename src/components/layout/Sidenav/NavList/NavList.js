import React from "react";
import routes from "../../../../common/routes";
import { Link } from "react-router-dom";

const NavList = () => {
  return routes.map((route) => {
    return (
      <Link key={route.name} to={route.path}>
        {route.name}
      </Link>
    );
  });
};

export default NavList;
