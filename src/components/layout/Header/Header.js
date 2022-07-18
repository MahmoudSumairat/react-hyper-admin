import React from "react";
import PageName from "../../PageName/PageName";
import UserOptions from "./UserOptions/UserOptions";
import styles from "./styles.module.scss";

const { header } = styles;

const Header = () => {
  return (
    <header className={header}>
      <PageName />
      <UserOptions />
    </header>
  );
};

export default Header;
