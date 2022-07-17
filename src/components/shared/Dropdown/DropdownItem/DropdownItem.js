import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./DropdownItem.module.scss";

const DropdownItem = ({ item, onSelectionChange }) => {
  const itemProps = {
    className: styles.dropdownItem,
  };

  const itemHTML = (
    <>
      {item.icon && <FontAwesomeIcon icon={item.icon} />}
      <span className={styles.dropdownItemText}>{item.displayName}</span>
    </>
  );

  return item.linkTo ? (
    <Link {...itemProps} to={item.linkTo}>
      {itemHTML}
    </Link>
  ) : (
    <li
      {...itemProps}
      onClick={() => {
        item.onClick ? item.onClick(item) : onSelectionChange(item);
      }}
    >
      {itemHTML}
    </li>
  );
};

export default DropdownItem;
