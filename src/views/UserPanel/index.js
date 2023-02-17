import { useEffect, useState } from "react";
import { AddNoteForm } from "../../Components/AddNoteForm";
import { AddCategoryForm } from "../../Components/AddCategoryForm";
import { Header } from "../../Components/Header";
import { NotesSection } from "../../Components/NotesSection";
import { useSession } from "../../context/sessionToken";
import { useNotes } from "../../hooks/useNotes";
import { useModal } from "../../context/ModalContext";
import "./style.css";

export const UserPanel = () => {
  const [, setModal] = useModal();
  const [loading, setLoading] = useState(true);
  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, [notes]);

  const [, , logout] = useSession();
  return (
    <div className="user_panel">
      <Header viewtitle="This is you personal panel">
        <button
          onClick={() => {
            setModal(<AddCategoryForm />);
          }}
        >
          Categorias
        </button>
        <button onClick={() => logout()}>Log out</button>
      </Header>
      <AddNoteForm></AddNoteForm>
      {loading ? (
        <div className="loading">
          <img src="./img/loading.gif" alt="loading"></img>
          <h2>Loading...</h2>
        </div>
      ) : (
        <NotesSection title="Your personal notes" notes={notes}></NotesSection>
      )}
    </div>
  );
};
