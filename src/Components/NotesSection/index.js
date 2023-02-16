import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";
import  convertImage  from "../../Utils/convertImage";


export const NotesSection = ({ title, notes }) => {
 
  const [, setModal] = useModal();

  

  return (
    <div className="notes_panel">
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
                      <NoteDetail id={note.id}  />
                    )
                  : setModal(<NoteDetail id={note.id} />);
              }}
            >
              <img className="pin" src="/img/pin.png" alt="pin"></img>
              <h3>{note.title ? note.title : note}</h3>
              {note.image && (
                <img
                  className="imagen_nota"
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
