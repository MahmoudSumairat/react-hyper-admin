import React from "react";
import CommonButton from "../../Button/Button";
import styles from "./styles.module.scss";

const { modalButton, modalFooter } = styles;

const ModalFooter = ({ confirmButtonClick, hideModal, isConfirmation }) => {
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
          onClick={() => {
            confirmButtonClick();
            hideModal();
          }}
          label={"Confirm"}
        />
      )}
    </div>
  );
};

export default ModalFooter;
