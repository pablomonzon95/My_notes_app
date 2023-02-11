import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";
export const NotesSection = ({ title, Notes, NotesImages }) => {
  const [, setModal] = useModal();
<<<<<<< HEAD
  const convertImage = (dataNumeric) => {
    const bytes = new Uint8Array(dataNumeric);

    // Convertir los bytes a un blob
    const myBlob = new Blob([bytes], { type: "image/jpg" });

    // Obtener el url
    var url = URL.createObjectURL(myBlob);

    return url;
  };
=======
  console.log(NotesImages)
>>>>>>> 85d960054e6986fa838af974b62a94745294fa2e
  return (
    <div className="notesPanel">
      <h1>{title}</h1>
      <ul>
<<<<<<< HEAD
        {publicNotes.map((note, index) => {
=======
        {Notes.map((note) => {
>>>>>>> 85d960054e6986fa838af974b62a94745294fa2e
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
<<<<<<< HEAD
              {note.image && (
                <img src={convertImage(note.imageData.data)} alt={note.title} />
              )}
=======
              {NotesImages && <img src={NotesImages} alt={note.title} />}
>>>>>>> 85d960054e6986fa838af974b62a94745294fa2e
              <p>{note.note}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
