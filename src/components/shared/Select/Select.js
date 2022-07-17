import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Select.module.scss";

const { selectContainer, selectButton, selectButtonText, selectButtonOpened } =
  styles;

const Select = ({
  items,
  onSelectionChange = () => {},
  label = "select label",
  className,
  value = "",
}) => {
  const defaultValue = value
    ? items.find((item) => item.id === value).displayName
    : label;
  const node = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectButtonValue, setSelectButtonValue] = useState(defaultValue);
  const openedClass = showDropdown ? selectButtonOpened : "";

  const handleSelectionChange = (item) => {
    setSelectButtonValue(item.displayName);
    onSelectionChange(item);
  };

  return (
    <div className={`${selectContainer} ${className}`}>
      <button
        ref={node}
        type="button"
        onClick={() => setShowDropdown(!showDropdown)}
        className={`${selectButton} ${openedClass} `}
      >
        <span className={selectButtonText}>{selectButtonValue}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <Dropdown
        parentNode={node}
        items={items}
        showDropdown={showDropdown}
        onDropdownHide={() => setShowDropdown(false)}
        onDropdownShow={() => setShowDropdown(true)}
        onSelectionChange={handleSelectionChange}
      />
    </div>
  );
};

export default Select;
