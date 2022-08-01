import React from "react";
import CommonButton from "../../Button/Button";
import styles from "./styles.module.scss";

const { modalButton, modalFooter } = styles;

const ModalFooter = ({
  confirmButtonClick,
  hideModal,
  isConfirmation,
  color,
  confirmTitle,
}) => {
  return (
    <div className={modalFooter}>
      <CommonButton
        onClick={hideModal}
        color={isConfirmation ? "textPrimary" : "primary"}
        className={modalButton}
        label={"Close"}
      />
      {isConfirmation && (
        <CommonButton
          className={modalButton}
          color={color}
          onClick={() => {
            confirmButtonClick();
            hideModal();
          }}
          label={confirmTitle}
        />
      )}
    </div>
  );
};

export default ModalFooter;
