import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { v4 as uuidv4 } from "uuid";
import FadeUpDown from "../../../animations/FadeUpDown/FadeUpDown";

const { textField, textFieldLabel, textFieldInput, textFieldError, hasError } =
  styles;

const TextField = (props) => {
  const {
    label = "text field",
    id = uuidv4(),
    className = "",
    error = false,
    multiline = false,
    width,
  } = props;

  const nodeRef = useRef(null);

  return (
    <div
      className={`${textField} ${className} ${width} ${
        !!error ? hasError : ""
      } `}
    >
      <label className={textFieldLabel} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea className={textFieldInput} id={id} type="text" {...props} />
      ) : (
        <input className={textFieldInput} id={id} type="text" {...props} />
      )}
      <FadeUpDown nodeRef={nodeRef} showsIn={!!error}>
        <span ref={nodeRef} className={textFieldError}>
          {error}
        </span>
      </FadeUpDown>
    </div>
  );
};

export default TextField;
