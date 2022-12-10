import {createPortal} from "react-dom";
import {useEffect} from "react";

import modalStyles from './modal.module.css';
import PropTypes from "prop-types";

import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

import {modalRoot} from "../../utils/constans";


const Modal = ({children, handleClose}) => {
  const handleModalClose = (evt) => {
    evt.stopPropagation();
    handleClose();
  }

  useEffect(() => {
    const handleEscClose = (evt) => {
      if (evt.key === "Escape") {
        handleClose();
      }
    }
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, []);

  return createPortal(
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
    ), modalRoot);
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default Modal;
