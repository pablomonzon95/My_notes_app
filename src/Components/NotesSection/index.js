import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";

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
