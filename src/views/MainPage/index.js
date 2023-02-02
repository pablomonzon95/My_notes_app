import "./style.css";
import { Header } from "../../Components/Header";
import {NotesSection} from '../../Components/NotesSection'

export const MainPage = () => {
  return (
    <div className="main_page">
      <Header tituloVista="Welcome to My Notes App">
        <button>Login</button>
        <button>Register</button>
      </Header>
<<<<<<< HEAD
      <main>Contenido principal</main>
      <footer>Pie de pagina</footer>
=======
      <NotesSection title='Forget to remembre your chores, from now we take care of it'></NotesSection>
>>>>>>> c9df35402b4e4b72a8b94bc0aa95e3cc24fe6804
    </div>
  );
};

