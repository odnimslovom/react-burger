import modalStyles from './modal.module.css';
import PropTypes from "prop-types";

import {createPortal} from "react-dom";
import {useEffect} from "react";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = ({isOpened, children, handleClose}) => {

  const handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      handleClose();
    }
  }

  const handleModalClose = (evt) => {
    evt.stopPropagation();
    handleClose();
  }

  useEffect(() => {
    document.addEventListener('keydown', handleClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, [isOpened]);

  return !isOpened ? null : createPortal(
    (
      <>
        <div className={modalStyles.modal}>
          <button className={`mt-10 mr-10 ${modalStyles.button_close}`} onClick={handleModalClose}>
            <CloseIcon type={"primary"}/>
          </button>
          {children}
        </div>
        <ModalOverlay handleClose={handleClose}/>
      </>
    ), document.getElementById("modals"));
};

Modal.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default Modal;
