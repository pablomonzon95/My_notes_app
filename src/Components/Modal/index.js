import "./style.css";
import PropTypes from 'prop-types'
import { useModal } from "../../context/ModalContext";

//Componente que da estructura a los diferentes modales que utilizamos en nuestra pàgina

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
