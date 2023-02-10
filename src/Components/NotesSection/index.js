import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";
export const NotesSection = ({ title, Notes, NotesImages }) => {
  const [, setModal] = useModal();
  console.log(NotesImages)
  return (
    <div className="notesPanel">
      <h1>{title}</h1>
      <ul>
        {Notes.map((note) => {
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
              {NotesImages && <img src={NotesImages} alt={note.title} />}
              <p>{note.note}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
