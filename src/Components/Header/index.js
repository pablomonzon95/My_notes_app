import "./style.css";
import { NavLink } from "react-router-dom";
export const Header = ({ viewtitle, children }) => {
  return (
    <div className="header">
     { localStorage.getItem("token") === "null" ?
       <NavLink to="/">
        <div className="logo">
          <img src="/img/imagennotas.png" alt="logo de la app"></img>
          <h1>My Notes APP</h1>
        </div>
      </NavLink>
      :
      <div className="logo">
          <img src="/img/imagennotas.png" alt="logo de la app"></img>
          <h1>My Notes APP</h1>
        </div>}

      <h2>{viewtitle}</h2>
      <div className="button_section">{children}</div>
    </div>
  );
};
