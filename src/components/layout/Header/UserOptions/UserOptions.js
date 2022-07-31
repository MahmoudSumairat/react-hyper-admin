import React, { useRef, useState } from "react";
import { faGear, faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropdown from "../../../shared/Dropdown/Dropdown";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../../redux/actionCreators/auth";

const { userOptions, userOptionsButton, userOptionsDropdown } = styles;

const UserOptions = () => {
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
  const node = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    // Do logout stuff
    localStorage.removeItem("authToken");
    dispatch(logoutAction());
    navigate("/", { replace: true });
  };

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
      onClick: logout,
    },
  ];

  return (
    <div className={userOptions}>
      <button
        ref={node}
        onClick={() => setShowOptionsDropdown(!showOptionsDropdown)}
        className={userOptionsButton}
      >
        <FontAwesomeIcon icon={faUser} />
        <Dropdown
          parentNode={node}
          showDropdown={showOptionsDropdown}
          items={userOptionsList}
          onDropdownHide={() => setShowOptionsDropdown(false)}
          onDropdownShow={() => setShowOptionsDropdown(true)}
          className={userOptionsDropdown}
        />
      </button>
    </div>
  );
};

export default UserOptions;
