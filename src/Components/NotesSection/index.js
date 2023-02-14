import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";


export const NotesSection = ({ title, notes }) => {
 
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
        {notes.map((note) => {

          let convertedImage= "";
          if(note.image) {
          convertedImage = convertImage(note.imageData.data)}
          return (
            <li
              key={note.id}
              onClick={() => {
                note.image
                  ? setModal(
                      <NoteDetail id={note.id} convertedImage={convertedImage} />
                    )
                  : setModal(<NoteDetail id={note.id} />);
              }}
            >
              <img className="pin" src="/img/pin.png" alt="pin"></img>
              <h3>{note.title ? note.title : note}</h3>
              {note.image && (
                <img
                  className="imagenNota"
                  src={convertedImage}
                  alt={note.title}
                />
              )}
              <p>{note.note ? note.note : "click here for more details"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
