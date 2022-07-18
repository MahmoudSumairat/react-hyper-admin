import React from "react";
import styles from "./styles.module.scss";

const { sharedDropdownDivider } = styles;

const Divider = ({ withDivider }) => {
  return withDivider && <hr className={sharedDropdownDivider} />;
};

export default Divider;
