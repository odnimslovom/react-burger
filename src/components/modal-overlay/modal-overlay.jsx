import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from "prop-types";

const ModalOverlay = ({handleClose}) => {

  const handleOverlayClose = (evt) => {
    evt.stopPropagation();
    handleClose();
  }

  return (
    <div className={modalOverlayStyles.overlay} onClick={handleOverlayClose}>
    </div>
  );
}

ModalOverlay.propTypes = {
  handleClose: PropTypes.func.isRequired
}

export default ModalOverlay;
