import React from "react";
import styles from "./styles.module.scss";

const { modalBody } = styles;

const ModalBody = ({ message }) => {
  return <div className={modalBody}> {message} </div>;
};

export default ModalBody;
