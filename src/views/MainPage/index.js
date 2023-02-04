import "./style.css";
import { useNavigate } from 'react-router-dom';

import { Header } from "../../Components/Header";
import { NotesSection } from "../../Components/NotesSection";
import { useNotes } from "../../hooks/useNotes";

export const MainPage = () => {
  const navigate = useNavigate()
  const { publicNotes } = useNotes();

  return (
    <div className="main_page">
      <Header tituloVista="Welcome to My Notes App">
        <button onClick={() => navigate(`/login`)}>Login</button>
        <button onClick={() => navigate(`/register`)}>Register</button>
      </Header>
      <main>
        <NotesSection publicNotes={publicNotes} title="Forget about remember your important chores!" />
      </main>
      <footer>Pablo Monzon & Fco Antonio Lorca </footer>
    </div>
  );
};
