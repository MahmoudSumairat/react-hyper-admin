import React from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";

const { radioContainer, radioLabel, radioInput } = styles;

const Radio = (props) => {
  const {
    label = "radio label",
    onChange = () => {},
    id = uuidv4(),
    width = "",
    className,
  } = props;

  return (
    <div className={`${radioContainer} ${width} ${className}`}>
      <input
        type="radio"
        className={radioInput}
        onChange={onChange}
        id={id}
        {...props}
      />
      <label className={radioLabel} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Radio;
