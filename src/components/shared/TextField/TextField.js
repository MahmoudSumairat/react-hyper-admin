import React from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import SlideUpDown from "../../../animations/SlideUpDown/SlideUpDown";

const { textField, textFieldLabel, textFieldInput, textFieldError } = styles;

const TextField = (props) => {
  const {
    label = "text field",
    id = uuidv4(),
    className = "",
    hasError = false,
    multiline = false,
    width,
  } = props;

  return (
    <div className={`${textField} ${className} ${width} `}>
      <label className={textFieldLabel} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea className={textFieldInput} id={id} type="text" {...props} />
      ) : (
        <input className={textFieldInput} id={id} type="text" {...props} />
      )}
      <SlideUpDown showsIn={hasError}>
        <span className={textFieldError}>error</span>
      </SlideUpDown>
    </div>
  );
};

export default TextField;
