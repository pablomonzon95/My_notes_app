import { useModal } from "../../context/ModalContext";
import "./style.css";
const Modal = ({ children }) => {
  const [, setModal] = useModal();

  return (
    <div className="modalBg" onClick={() => setModal(null)}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
