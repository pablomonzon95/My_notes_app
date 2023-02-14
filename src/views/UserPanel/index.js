import { useEffect } from "react";
import { AddNoteForm } from "../../Components/AddNoteForm";
import { Header } from "../../Components/Header";
import { NotesSection } from "../../Components/NotesSection";
import { useSession } from "../../context/sessionToken";
import { useNotes } from "../../hooks/useNotes";

export const UserPanel = () => {
  const { Notes, getNotes } = useNotes();
  useEffect(()=> {
  getNotes()
  }, [])

  const [, , logout] = useSession();
  return (
    <div className="userPanel">
      <Header viewtitle="This is you personal panel">
        <button>Categorias</button>
        <button onClick={() => logout()}>Log out</button>
      </Header>
      <AddNoteForm></AddNoteForm>
      <NotesSection title="Your personal notes" notes={Notes}></NotesSection>
    </div>
  );
};
