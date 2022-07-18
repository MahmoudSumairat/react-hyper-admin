import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

const { selectButtonText, selectButton } = styles;

const SelectButton = ({
  node,
  setShowDropdown,
  showDropdown,
  selectButtonValue,
  selectButtonOpened,
}) => {
  const openedClass = showDropdown ? selectButtonOpened : "";

  return (
    <button
      ref={node}
      type="button"
      onClick={() => setShowDropdown(!showDropdown)}
      className={`${selectButton} ${openedClass} `}
    >
      <span className={selectButtonText}>{selectButtonValue}</span>
      <FontAwesomeIcon icon={faChevronDown} />
    </button>
  );
};

export default SelectButton;
