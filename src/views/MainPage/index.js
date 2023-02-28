import "./style.css";

import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header";
import { NotesSection } from "../../Components/NotesSection";
import { usePublicNotes } from "../../hooks/usePublicNotes";
import { Footer } from "../../Components/Footer";
import { useEffect } from "react";

//Vista Principal que nos sale al no estar loggeado, en ella figuran las notas publicas que los usuarios eligen para mostrar

export const MainPage = () => {

  const { publicNotes, getPublicNotes } = usePublicNotes();

  useEffect(() => {
    getPublicNotes();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();

 

  return (
    <div className="main_page">
      <Header viewtitle="Welcome to My Notes App">
        <button onClick={() => navigate(`/login`)}>Login</button>
        <button onClick={() => navigate(`/register`)}>Register</button>
      </Header>
      <main className="main">
        <NotesSection
          notes={publicNotes}
          title="Forget about remember your important chores!"
        />
      </main>
      <Footer></Footer>
    </div>
  );
};
