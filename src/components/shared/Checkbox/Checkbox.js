import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";

const { checkboxContainer, checkboxInput, checkboxLabel, checkboxIcon } =
  styles;

const Checkbox = (props) => {
  const {
    label = "",
    id = uuidv4(),
    onChange = () => {},
    className = "",
    width,
    checked = false,
  } = props;

  return (
    <div className={`${checkboxContainer} ${className} ${width}`}>
      <input
        checked={checked}
        {...props}
        onChange={(e) =>
          onChange({ ...e, target: { ...e, value: e.target.checked } })
        }
        id={id}
        className={checkboxInput}
        type="checkbox"
      />
      <label htmlFor={id} className={checkboxLabel}>
        {label}
        <span className={checkboxIcon}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
