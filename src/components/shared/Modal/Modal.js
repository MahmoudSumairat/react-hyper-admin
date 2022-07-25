import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import useModal from "../../../hooks/useModal";
import Animate from "../Animate/Animate";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalBody from "./ModalBody/ModalBody";
import ModalFooter from "./ModalFooter/ModalFooter";
const { modal, modalOverlay } = styles;

const Modal = () => {
  const { showModal, modalContent } = useSelector((state) => state.modal);
  const { hideModal } = useModal();
  const { title, message, type, confirmButtonClick } = modalContent;
  const isConfirmation = type === "confirmation";

  return (
    <>
      {showModal && <div className={modalOverlay}></div>}
      <Animate animationType="scaleUpDown" showsIn={showModal}>
        <div className={modal}>
          <ModalHeader title={title} />
          <ModalBody message={message} />
          <ModalFooter
            isConfirmation={isConfirmation}
            hideModal={hideModal}
            confirmButtonClick={confirmButtonClick}
          />
        </div>
      </Animate>
    </>
  );
};

export default Modal;
