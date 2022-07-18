import React, { useState } from "react";
import Checkbox from "../../Checkbox/Checkbox";
import styles from "./styles.module.scss";

const { dropdownMultiSelectItem } = styles;

const MultiSelectDropdownItem = ({ item, onChange, isChecked = false }) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <li>
      <Checkbox
        label={item.displayName}
        onChange={(e) => {
          setChecked(!checked);
          onChange(e);
        }}
        checked={checked}
        className={dropdownMultiSelectItem}
      />
    </li>
  );
};

export default MultiSelectDropdownItem;
