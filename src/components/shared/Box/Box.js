import React from "react";
import styles from "./box.module.scss";
const { commonBox } = styles;

const Box = ({ children, className }) => {
  return <div className={`${commonBox} ${className}`}>{children}</div>;
};

export default Box;
