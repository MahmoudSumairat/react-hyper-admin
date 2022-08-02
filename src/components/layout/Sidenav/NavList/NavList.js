import React, { useEffect } from "react";
import routes from "../../../../common/routesList";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setPageName } from "../../../../redux/actionCreators/header";

const { active, navListItem, navListItemText } = styles;

const initializePageName = (location, isAuthenticated, dispatch) => {
  if (location.pathname === "/") {
    return dispatch(setPageName("home"));
  }
  const pathnamesArr = location.pathname.split("/");

  const pageLevel = pathnamesArr.length - 1;
  const routesList = routes(isAuthenticated);
  const rootPagePath = pathnamesArr[1];
  const rootPageName = rootPagePath.split("-").join(" ");
  if (pageLevel === 1) {
    dispatch(setPageName(rootPageName));
  } else {
    const currentRoute = routesList.find(
      (route) =>
        route.pageLevel === pageLevel && route.rootPage === rootPagePath
    );
    dispatch(setPageName(currentRoute.name));
  }
};

const NavList = () => {
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    initializePageName(location, isAuthenticated, dispatch);
    /* eslint-disable */
  }, [location.pathname]);

  return routes(isAuthenticated)
    .filter((route) => !route.hideFromMenu)
    .map((route) => {
      const isActive = route.exact
        ? location.pathname === route.path
        : location.pathname.includes(route.path);

      return (
        <Link
          className={`${navListItem} ${isActive ? active : ""}`}
          key={route.name}
          to={route.path}
          onClick={() => dispatch(setPageName(route.name))}
        >
          <FontAwesomeIcon icon={route.icon} />
          <span className={navListItemText}>{route.name}</span>
        </Link>
      );
    });
};

export default NavList;
