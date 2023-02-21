import "./style.css";
import { useEffect } from "react";
import { usePublicNotes } from "../../hooks/usePublicNotes";
import convertImage from "../../Utils/convertImage";
import swal from "sweetalert";
import { deleteNoteService } from "../../services/notes";
import { useModal } from "../../context/ModalContext";
import { AddNoteForm } from "../AddNoteForm";
export const NoteDetail = ({ id }) => {
  const { getNote, publicNote } = usePublicNotes();
  const [, setModal] = useModal();
  console.log(id);
  useEffect(() => {
    getNote(id);
    //eslint-disable-next-line
  }, []);
  const handleEditNote = () => {
    swal({
      title: "Are you sure you want to edit this note?",

      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        setModal(<AddNoteForm id={publicNote.id}></AddNoteForm>);
      } else {
        swal("Your note stay the same!");
      }
    });
  };

  const handleDeleteNote = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this note!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteNoteService(publicNote.id);
        setModal(null);
        swal("Poof! Your note has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your note is safe!");
      }
    });
  };
  return (
    <div className="note_detail">
      <img className="pin_detail" src="/img/pin.png" alt="pin"></img>
      <h2>{publicNote.title}</h2>
      {publicNote.imageData && (
        <img
          className="image_nota"
          src={convertImage(publicNote.imageData.data)}
          alt={publicNote.title}
        ></img>
      )}
      <p>{publicNote.note}</p>
      {localStorage.getItem("token") !== "null" && (
        <div className="edit_delete">
          <img
            onClick={handleDeleteNote}
            src="./img/basura.png"
            alt="trash"
            className="trash"
          ></img>
          <img
            onClick={handleEditNote}
            src="./img/editar.png"
            alt="edit"
            className="edit"
          ></img>
        </div>
      )}
    </div>
  );
};
