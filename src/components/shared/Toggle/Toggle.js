import React from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";

const {
  toggleContainer,
  toggleThumb,
  toggleSlider,
  toggleLabel,
  toggleInput,
  toggleLabelContainer,
} = styles;

const Toggle = ({ label, id = uuidv4(), ...props }) => {
  return (
    <div className={toggleContainer}>
      <input id={id} className={toggleInput} type="checkbox" {...props} />
      <label className={toggleLabelContainer} htmlFor={id}>
        <span className={toggleLabel}> {label}</span>
        <span className={toggleSlider}>
          <span className={toggleThumb}></span>
        </span>
      </label>
    </div>
  );
};

export default Toggle;
