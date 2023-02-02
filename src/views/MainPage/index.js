import "./style.css";
import { Header } from "../../Components/Header";
import { NotesSection } from "../../Components/NotesSection";

export const MainPage = () => {
  return (
    <div className="main_page">
      <Header tituloVista="Welcome to My Notes App">
        <button>Login</button>
        <button>Register</button>
      </Header>
      <main>Contenido principal</main>
      <footer>Pie de pagina</footer>
    </div>
  );
};
