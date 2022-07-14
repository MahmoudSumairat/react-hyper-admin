import React from "react";
import routes from "../../../../common/routesList";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavList = () => {
  const location = useLocation();

  return routes.map((route) => {
    const isActive = location.pathname === route.path ? "active" : "";
    return (
      <Link
        className={`nav-list__item ${isActive}`}
        key={route.name}
        to={route.path}
      >
        <FontAwesomeIcon className="" icon={route.icon} />
        <span className="nav-list__text">{route.name}</span>
      </Link>
    );
  });
};

export default NavList;
