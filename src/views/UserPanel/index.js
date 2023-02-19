import { useEffect, useState } from "react";
import { AddNoteForm } from "../../Components/AddNoteForm";
import { AddCategoryForm } from "../../Components/AddCategoryForm";
import { Header } from "../../Components/Header";
import {Footer} from "../../Components/Footer"
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
    }, 1000);
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
          Add category
        </button>
        <button onClick={() => logout()}>Log out</button>
      </Header>
      
      {loading ? (
        <div className="loading">
          <img src="./img/loading.gif" alt="loading"></img>
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
        <AddNoteForm></AddNoteForm>
        <NotesSection title="Your personal notes" notes={notes}></NotesSection>
        </>

      )}
      <Footer></Footer>
    </div>
  );
};
