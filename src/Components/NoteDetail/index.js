import { useEffect } from "react";
import "./style.css";
import { usePublicNotes } from "../../hooks/usePublicNotes";
export const NoteDetail = ({ id, convertImage }) => {
  const { getPublicNote, publicNote } = usePublicNotes();

  useEffect(() => {
    getPublicNote(id);
  }, []);
  console.log(publicNote);
  return (
    <div className="noteDetail">
      <img className="pinDetail" src="/img/pin.png" alt="pin"></img>
      <h2>hola</h2>
      {/* <image src={convertImage(publicNote.data.data.imageId)}></image> */}
    </div>
  );
};
