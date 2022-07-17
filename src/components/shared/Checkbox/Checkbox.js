import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "./Checkbox.module.scss";
import { v4 as uuidv4 } from "uuid";

const { checkboxContainer, checkboxInput, checkboxLabel, checkboxIcon } =
  styles;

const Checkbox = (props) => {
  const {
    label = "",
    id = uuidv4(),
    onChange = () => {},
    className = "",
  } = props;

  return (
    <div className={`${checkboxContainer} ${className}`}>
      <input
        {...props}
        onChange={() => {
          console.log("222");
        }}
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
