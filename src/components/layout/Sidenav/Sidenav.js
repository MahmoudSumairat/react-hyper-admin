import React from "react";
import Logo from "../../Logo/Logo";
import NavList from "./NavList/NavList";
import styles from "./styles.module.scss";

const { sidenav, sidenavBranding, sidenavNavContainer, sidenavNavList } =
  styles;

const Sidenav = () => {
  return (
    <div className={sidenav}>
      <div className={sidenavBranding}>
        <Logo />
      </div>
      <nav className={sidenavNavContainer}>
        <ul className={sidenavNavList}>
          <NavList />
        </ul>
      </nav>
    </div>
  );
};

export default Sidenav;
