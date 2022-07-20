import React, { useRef } from "react";
import styles from "./styles.module.scss";
import formStyles from "../../../styles/form.module.scss";
import { v4 as uuidv4 } from "uuid";
import FadeUpDown from "../../../animations/FadeUpDown/FadeUpDown";

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

  const nodeRef = useRef(null);

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
          className={`${formInput} ${textFieldInput}`}
          id={id}
          type="text"
          {...props}
        />
      )}
      <FadeUpDown nodeRef={nodeRef} showsIn={!!error}>
        <span ref={nodeRef} className={fieldError}>
          {error}
        </span>
      </FadeUpDown>
    </div>
  );
};

export default TextField;
