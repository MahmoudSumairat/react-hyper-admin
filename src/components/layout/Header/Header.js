import React from "react";
import PageName from "../../PageName/PageName";
import UserOptions from "./UserOptions/UserOptions";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <PageName />
      <UserOptions />
    </header>
  );
};

export default Header;
