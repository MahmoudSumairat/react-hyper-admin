import React, { useState } from "react";
import { faGear, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../../shared/Dropdown/Dropdown";
import styles from "./UserOptions.module.scss";

const UserOptions = () => {
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const userOptionsList = [
    {
      displayName: "Profile",
      id: 1,
      icon: faUser,
      linkTo: "/profile",
    },
    {
      displayName: "Settings",
      id: 2,
      icon: faGear,
    },
    {
      displayName: "Logout",
      id: 3,
      withDivider: true,
      icon: faPowerOff,
    },
  ];

  return (
    <div className={styles.userOptions}>
      <button
        onClick={() => setShowOptionsDropdown(!showOptionsDropdown)}
        className={styles.userOptionsButton}
      >
        <FontAwesomeIcon icon={faUser} />
        <Dropdown
          showDropdown={showOptionsDropdown}
          items={userOptionsList}
          onDropdownHide={() => setShowOptionsDropdown(false)}
          onDropdownShow={() => setShowOptionsDropdown(true)}
        />
      </button>
    </div>
  );
};

export default UserOptions;
