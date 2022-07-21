import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PageRoutes from "../common/routes";
import Header from "../components/layout/Header/Header";
import Sidenav from "../components/layout/Sidenav/Sidenav";
import Login from "../pages/Login/Login";

import styles from "./styles.module.scss";
const { appContainer, mainContent } = styles;

const AppContainer = () => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("authToken"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/", { replace: true });
    }
    /* eslint-disable-next-line */
  }, [authToken]);

  const handleSetAuthToken = (token) => {
    localStorage.setItem("authToken", token);
    setAuthToken(token);
  };

  return (
    <div className="App">
      {authToken ? (
        <div className={appContainer}>
          <Sidenav />
          <Header />
          <main className={mainContent}>
            <PageRoutes isAuthenticated={authToken} />
          </main>
        </div>
      ) : (
        <PageRoutes isAuthenticated={authToken} />
      )}
    </div>
  );
};

export default AppContainer;
