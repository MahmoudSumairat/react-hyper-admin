import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const { pageNameContainer, pageNameText } = styles;

const PageName = (props) => {
  const { pageName } = useSelector((state) => state.header);
  return (
    <div className={pageNameContainer}>
      <span className={pageNameText}>{pageName}</span>
    </div>
  );
};

export default PageName;
