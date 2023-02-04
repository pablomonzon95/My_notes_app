import "./style.css";
export const Form = ({ textoBoton, children }) => {
  return (
    <form className="form">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"></input>
      <label>Contraseña</label>
      <input type="password" id="password" name="password"></input>
      <div className="children">{children}</div>
      <button>{textoBoton}</button>
    </form>
  );
};
