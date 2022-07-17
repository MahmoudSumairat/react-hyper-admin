import React from "react";
import { useLocation } from "react-router";
import styles from "./PageName.module.scss";

const PageName = () => {
  const location = useLocation();

  const getPageName = () => {
    const pathNameArray = location.pathname.split("/");
    const pathNameLength = pathNameArray.length;
    return pathNameArray[pathNameLength - 1] || "home";
  };

  return (
    <div className={styles.pageName}>
      <span className={styles.pageNameText}>{getPageName()}</span>
    </div>
  );
};

export default PageName;
