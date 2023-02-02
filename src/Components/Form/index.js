import "./style.css";
export const Form = ({ textoBoton }) => {
  return (
    <form className="form">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"></input>
      <label>Contraseña</label>
      <input type="password" id="password" name="password"></input>
      <button>{textoBoton}</button>
    </form>
  );
};
