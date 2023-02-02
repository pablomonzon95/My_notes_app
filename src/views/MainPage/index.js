import "./style.css";
import { Header } from "../../Components/Header";
export const MainPage = () => {
  return (
    <div className="main_page">
      <Header tituloVista="Bienvenidos a My Notes App">
        <button>Login</button>
        <button>Register</button>
      </Header>
      <main>Contenido principal</main>
      <footer>Pie de pagina</footer>
    </div>
  );
};
