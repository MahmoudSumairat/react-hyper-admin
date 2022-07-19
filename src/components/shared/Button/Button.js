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
} = styles;

const buttonColors = {
  primary: buttonPrimary,
  white: buttonWhite,
  grey: buttonGrey,
};

const CommonButton = ({
  label,
  onClick,
  className,
  icon,
  color = "primary",
  ...rest
}) => {
  return (
    <button className={`${button} ${buttonColors[color]} `} {...rest}>
      {icon && <FontAwesomeIcon className={buttonIcon} icon={icon} />}
      <span className={icon ? buttonText : ""}>{label}</span>
    </button>
  );
};

export default CommonButton;
