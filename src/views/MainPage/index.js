import "./style.css";
import { Header } from "../../Components/Header";
import { NotesSection } from "../../Components/NotesSection";
import { useNotes } from "../../hooks/useNotes";

export const MainPage = () => {
  const { publicNotes } = useNotes();

  return (
    <div className="main_page">
      <Header tituloVista="Welcome to My Notes App">
        <button>Login</button>
        <button>Register</button>
      </Header>
      <main>
        <NotesSection publicNotes={publicNotes} title="Public Notes" />
      </main>
      <footer>Pie de pagina</footer>
    </div>
  );
};
