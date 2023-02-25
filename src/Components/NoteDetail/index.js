import "./style.css";
import { useEffect } from "react";
import { usePublicNotes } from "../../hooks/usePublicNotes";

import swal from "sweetalert";
import { deleteNoteService } from "../../services/notes";
import { useModal } from "../../context/ModalContext";

import { EditNoteForm } from "../EditNoteForm";
export const NoteDetail = ({ id, notes, setNotes }) => {
  const { getNote, publicNote } = usePublicNotes();
  const [, setModal] = useModal();

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
        setModal(
          <EditNoteForm
            note={publicNote}
            notes={notes}
            setNotes={setNotes}
          ></EditNoteForm>
        );
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
        setNotes(notes.filter((note) => note.id !== publicNote.id));
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
      {publicNote.image ? (
        publicNote.image === "No images" || publicNote.image === null ? null : (
          <img
            className="image_nota"
            src={`${process.env.REACT_APP_BACKEND}/uploads/${publicNote.image}`}
            alt={publicNote.title}
          ></img>
        )
      ) : null}
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
