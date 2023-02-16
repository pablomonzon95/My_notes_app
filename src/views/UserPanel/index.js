import { useEffect } from "react";
import { AddNoteForm } from "../../Components/AddNoteForm";
import { AddCategoryForm } from "../../Components/AddCategoryForm";
import { Header } from "../../Components/Header";
import { NotesSection } from "../../Components/NotesSection";
import { useSession } from "../../context/sessionToken";
import { useNotes } from "../../hooks/useNotes";
import { useModal } from "../../context/ModalContext";

export const UserPanel = () => {
  const [, setModal] = useModal();

  const { Notes, getNotes } = useNotes();
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const [, , logout] = useSession();
  return (
    <div className="userPanel">
      <Header viewtitle="This is you personal panel">
        <button
          onClick={() => {
            console.log("estoy haciendo click");
            setModal(<AddCategoryForm />);
          }}
        >
          Categorias
        </button>
        <button onClick={() => logout()}>Log out</button>
      </Header>
      <AddNoteForm></AddNoteForm>
      <NotesSection title="Your personal notes" notes={Notes}></NotesSection>
    </div>
  );
};
