import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className={styles.logoFirstWord}>Tickatak</span>
      <span className={styles.logoLastWord}>Admin</span>
    </div>
  );
};

export default Logo;
