import { useModal } from "../../context/ModalContext";
import PropTypes from 'prop-types'
import "./style.css";

const Modal = ({ children }) => {
  const [, setModal] = useModal();

  return (
    <div className="modal_big" onClick={() => setModal(null)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

Modal.propTypes ={
  Children: PropTypes.any
}
export default Modal;
