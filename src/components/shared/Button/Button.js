import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

const {
  button,
  buttonIcon,
  buttonText,
  buttonPrimary,
  buttonWhite,
  buttonGrey,
  buttonDanger,
  buttonWarning,
  buttonTextPrimary,
  buttonTextGrey,
  buttonTextDanger,
  buttonTextWarning,
  buttonTextDark,
} = styles;

const buttonColors = {
  primary: buttonPrimary,
  white: buttonWhite,
  grey: buttonGrey,
  danger: buttonDanger,
  warning: buttonWarning,
  textPrimary: buttonTextPrimary,
  textGrey: buttonTextGrey,
  textDanger: buttonTextDanger,
  textWarning: buttonTextWarning,
  textDark: buttonTextDark,
};

const CommonButton = ({
  label,
  onClick = () => {},
  className,
  icon,
  color = "primary",
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`${button} ${buttonColors[color]} ${className} `}
      {...rest}
    >
      {icon && <FontAwesomeIcon className={buttonIcon} icon={icon} />}
      {label && <span className={icon ? buttonText : ""}>{label}</span>}
    </button>
  );
};

export default CommonButton;
