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




  return (
    <div className="note_detail">
      <img className="pin_detail" src="/img/pin.png" alt="pin"></img>
      <h2>{publicNote.title}</h2>
      { publicNote.imageData && <img className="image_nota" src={ convertImage(publicNote.imageData.data)} alt={publicNote.title }></img> }
      <p>{publicNote.note}</p>
    </div>
  );
};
