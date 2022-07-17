import React from "react";
import routes from "../../../../common/routesList";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./NavList.module.scss";

const NavList = () => {
  const location = useLocation();

  return routes.map((route) => {
    const isActive = location.pathname === route.path ? styles.active : "";
    return (
      <Link
        className={`${styles.navListItem} ${isActive}`}
        key={route.name}
        to={route.path}
      >
        <FontAwesomeIcon icon={route.icon} />
        <span className={styles.navListItemText}>{route.name}</span>
      </Link>
    );
  });
};

export default NavList;
