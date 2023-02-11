import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";
export const NotesSection = ({ title, publicNotes }) => {
  const [, setModal] = useModal();
  const convertImage = (dataNumeric) => {
    const bytes = new Uint8Array(dataNumeric);

    // Convertir los bytes a un blob
    const myBlob = new Blob([bytes], { type: "image/jpg" });

    // Obtener el url
    var url = URL.createObjectURL(myBlob);

    return url;
  };
  return (
    <div className="notesPanel">
      <h1>{title}</h1>
      <ul>
        {publicNotes.map((note, index) => {
          return (
            <li
              key={index}
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
              {note.image && (
                <img src={convertImage(note.imageData.data)} alt={note.title} />
              )}
              <p>{note.note}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
