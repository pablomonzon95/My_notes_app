import { useEffect } from "react";
import "./style.css";
import { usePublicNotes } from "../../hooks/usePublicNotes";
import { useNotes } from "../../hooks/useNotes";
export const NoteDetail = ({ id, convertedImage }) => {

  const { getPublicNote, publicNote } = usePublicNotes();
  const {getNote, UserNote} = useNotes();
  
  useEffect(() => {
    getPublicNote(id);
  }, []);

  useEffect(() => {
    getNote(id);
  }, []);



  return (
    <div className="noteDetail">
      <img className="pinDetail" src="/img/pin.png" alt="pin"></img>
      <h2>{publicNote.title}</h2>
      <img className="imageNota" src={convertedImage} alt={publicNote.title }></img> 
      <p>{publicNote.note}</p>
    </div>
  );
};
