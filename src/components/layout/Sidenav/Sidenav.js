import React from "react";
import Logo from "../../Logo/Logo";
import NavList from "./NavList/NavList";
import styles from "./Sidenav.module.scss";

const Sidenav = () => {
  return (
    <div className={styles.sidenav}>
      <div className={styles.sidenavBranding}>
        <Logo />
      </div>
      <nav className={styles.sidenavNavContainer}>
        <ul className={styles.sidenavNavList}>
          <NavList />
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
