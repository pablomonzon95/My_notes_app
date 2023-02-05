import "./style.css";
import { NavLink } from "react-router-dom";
export const Header = ({ tituloVista, children }) => {
  return (
    <div className="header">
      <NavLink to="/">
        <div className="logo">
          <img src="/img/imagennotas.png" alt="logo de la app"></img>
          <h1>My Notes APP</h1>
        </div>
      </NavLink>

      <h2>{tituloVista}</h2>
      <div className="buttonSection">{children}</div>
    </div>
  );
};
