import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import ScaleUpDown from "../../../animations/ScaleUpDown/ScaleUpDown";
import useModal from "../../../hooks/useModal";
import CommonButton from "../Button/Button";
const {
  modal,
  modalOverlay,
  modalHeader,
  modalBody,
  modalFooter,
  modalButton,
} = styles;

const Modal = () => {
  const { showModal, modalContent } = useSelector((state) => state.modal);
  const { hideModal } = useModal();
  const { title, message, type, confirmButtonClick } = modalContent;
  const isConfirmation = type === "confirmation";

  return (
    <>
      {showModal && <div className={modalOverlay}></div>}
      <ScaleUpDown showsIn={showModal}>
        <div className={modal}>
          <div className={modalHeader}> {title} </div>
          <div className={modalBody}> {message} </div>
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
                onClick={confirmButtonClick}
                label={"Confirm"}
              />
            )}
          </div>
        </div>
      </ScaleUpDown>
    </>
  );
};

export default Modal;
