import React from "react";
import styles from "./styles.module.scss";
import formStyles from "../../../styles/form.module.scss";
import { v4 as uuidv4 } from "uuid";
import Animate from "../Animate/Animate";

const { textField, textFieldInput } = styles;

const { hasError, fieldError, inputLabel, formInput } = formStyles;

const TextField = (props) => {
  const {
    label = "text field",
    id = uuidv4(),
    className = "",
    error = false,
    multiline = false,
    width,
  } = props;

  return (
    <div
      className={`${textField} ${className} ${width} ${
        !!error ? hasError : ""
      } `}
    >
      <label className={inputLabel} htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea className={textFieldInput} id={id} type="text" {...props} />
      ) : (
        <input
          autoComplete="off"
          className={`${formInput} ${textFieldInput}`}
          id={id}
          type="text"
          {...props}
        />
      )}
      <Animate animationType="fadeUpDown" showsIn={!!error}>
        <span className={fieldError}>{error}</span>
      </Animate>
    </div>
  );
};

export default TextField;
