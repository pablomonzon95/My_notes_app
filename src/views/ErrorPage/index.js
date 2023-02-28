import "./style.css";

import { Link } from "react-router-dom";

//Vista que sale al poner una ruta incorrecta en el navegador
//Redirecciona al User Page o MainPage segun corresponda

export const ErrorPage =() => {

  return (
    <div className="error-page">
      <h1>It seems you are lost! </h1>
      <span className="link">
        {localStorage.getItem("token") === "null" ? <Link to={"/"}>Go to home page</Link>
        : 
        <Link to={"/panel"}>Go to home page</Link>}
      </span>
    
    </div>
  );
}
