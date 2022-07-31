import React from "react";
import routes from "../../../../common/routesList";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";

const { active, navListItem, navListItemText } = styles;

const NavList = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return routes(isAuthenticated).map((route) => {
    const isActive = location.pathname === route.path ? active : "";
    return (
      <Link
        className={`${navListItem} ${isActive}`}
        key={route.name}
        to={route.path}
      >
        <FontAwesomeIcon icon={route.icon} />
        <span className={navListItemText}>{route.name}</span>
      </Link>
    );
  });
};

export default NavList;
