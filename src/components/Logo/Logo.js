import React from "react";
import styles from "./styles.module.scss";

const { logo, logoFirstWord, logoLastWord } = styles;

const Logo = () => {
  return (
    <div className={logo}>
      <span className={logoFirstWord}>React</span>
      <span className={logoLastWord}>Hyper Admin</span>
    </div>
  );
};

export default Logo;
