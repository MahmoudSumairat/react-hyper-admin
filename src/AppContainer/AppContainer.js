import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import PageRoutes from "../common/routes";
import Header from "../components/layout/Header/Header";
import Sidenav from "../components/layout/Sidenav/Sidenav";
import Modal from "../components/shared/Modal/Modal";

import styles from "./styles.module.scss";
const { appContainer, mainContent } = styles;

const AppContainer = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const checkUserAuthenticated = () => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    checkUserAuthenticated();

    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="App">
      <Modal />
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
