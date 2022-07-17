import React from "react";
import { useLocation } from "react-router";
import styles from "./PageName.module.scss";

const { pageName, pageNameText } = styles;

const PageName = () => {
  const location = useLocation();

  const getPageName = () => {
    const pathNameArray = location.pathname.split("/");
    const pathNameLength = pathNameArray.length;
    return pathNameArray[pathNameLength - 1] || "home";
  };

  return (
    <div className={pageName}>
      <span className={pageNameText}>{getPageName()}</span>
    </div>
  );
};

export default PageName;
