import { useEffect } from "react";
import "./style.css";
import { usePublicNotes } from "../../hooks/usePublicNotes";
import  convertImage  from "../../Utils/convertImage";
export const NoteDetail = ({ id }) => {

  const { getNote, publicNote } = usePublicNotes();
 
  
  useEffect(() => {
    getNote(id);
    //eslint-disable-next-line
  },  [] );

 console.log(publicNote)


  return (
    <div className="note_detail">
      <img className="pinDetail" src="/img/pin.png" alt="pin"></img>
      <h2>{publicNote.title}</h2>
      { publicNote.imageData && <img className="imageNota" src={ convertImage(publicNote.imageData.data)} alt={publicNote.title }></img> }
      <p>{publicNote.note}</p>
    </div>
  );
};
