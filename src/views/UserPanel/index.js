import { useEffect } from "react";
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

  const { notes, getNotes } = useNotes();

  useEffect(() => {
    getNotes();
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
      <NotesSection title="Your personal notes" notes={notes}></NotesSection>
    </div>
  );
};
