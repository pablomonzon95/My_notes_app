import "./style.css";
import PropTypes from 'prop-types';

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";

//componente donde se muestran todas las notas, tanto en el User Panel como en el MainPage.
// Al clickear en una nota se abre un modal

export const NotesSection = ({ title, notes, setNotes }) => {

  const [, setModal] = useModal();

  return (
    <div className="notes_panel">
      <h1>{title}</h1>
      <ul>
        {notes.map((note) => {
          return (
            <li
              key={note.id}
              onClick={() => {
                setModal(<NoteDetail setNotes={setNotes} notes ={notes}id={note.id} />);
              }}
            >
              <img className="pin" src="/img/pin.png" alt="pin"></img>
              <h3>{note.title ? note.title : note}</h3>
              {note.image ? (
                note.image === "No images" || note.image === null ? null : (
                  <img
                    className="imagen_nota"
                    src={`${process.env.REACT_APP_BACKEND}/uploads/${note.image}`}
                    alt={note.title}
                  />
                )
              ) : null}
              <p>{note.note ? note.note : "click here for more details"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

NotesSection.propTypes = {
  title: PropTypes.string.isRequired,
  setNotes:PropTypes.func,
  notes:PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    note: PropTypes.string,
    public: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,]),
    image: PropTypes.string,
    userId:PropTypes.number,
    categoryId: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,])

  })).isRequired


}