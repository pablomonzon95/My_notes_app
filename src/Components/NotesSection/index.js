import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";
export const NotesSection = ({ title, publicNotes }) => {
  const [, setModal] = useModal();
  return (
    <div className="notesPanel">
      <h1>{title}</h1>
      <ul>
        {publicNotes.map((note) => {
          return (
            <li
              key={note.id}
              onClick={() =>
                setModal(
                  <NoteDetail
                    id={note.id}
                    title={note.title}
                    note={note.note}
                  />
                )
              }
            >
              <h3>{note.title}</h3>
              {note.image && <img src={note.image} alt={note.title} />}
              <p>{note.note}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
