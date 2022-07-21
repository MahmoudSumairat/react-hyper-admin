import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PageRoutes from "../common/routes";
import Header from "../components/layout/Header/Header";
import Sidenav from "../components/layout/Sidenav/Sidenav";
import { loginAction } from "../redux/actionCreators/auth";

import styles from "./styles.module.scss";
const { appContainer, mainContent } = styles;

const AppContainer = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/", { replace: true });
    } else {
      dispatch(loginAction(authToken));
    }

    /* eslint-disable-next-line */
  }, [isAuthenticated]);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div className={appContainer}>
          <Sidenav />
          <Header />
          <main className={mainContent}>
            <PageRoutes />
          </main>
        </div>
      ) : (
        <PageRoutes />
      )}
    </div>
  );
};

export default AppContainer;
