import "./style.css";

import { useModal } from "../../context/ModalContext";
import { NoteDetail } from "../NoteDetail";
import { useNotes } from "../../hooks/useNotes"

export const NotesSection = ({ title, notes }) => {
  
  const { UserNote, getNoteById} = useNotes();
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
        
        {notes.map((note, index) => {
        
          return (
            <li
              key={index}
              onClick={() => {
                getNoteById(note.id)
              
           
             
               
                note.image ?
                setModal(
                  <NoteDetail
                    title={note.title}
                    note={note.note}
                 
                    image={note.image}
                    convertImage={convertImage}
                    data = {note.imageData.data}
                  />
                )
                :
                setModal(
                  <NoteDetail
                    title={note.title}
                    note={note.note}
                  />
                ) 
              }}
            >
              <img className ="pin" src="/img/pin.jpg" alt="pin"></img>
              <h3>{note.title ? note.title : note }</h3>
              {note.image && (
                <img className="imagenNota" src={convertImage(note.imageData.data)} alt={note.title} />
              )}
              <p>{note.note ? note.note : "click here for more details"}</p>
            </li>
              );
        })}
      </ul>
    </div>
  );
};
