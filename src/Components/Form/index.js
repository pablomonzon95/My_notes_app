import "./style.css";
export const Form = ({ textoBoton, children, handleInputChangeFunction, handleSubmitFunction }) => {
  return (
    <form className="form" onSubmit={handleSubmitFunction}>
      <label htmlFor="email">Email</label>
      <input onChange={handleInputChangeFunction} type="email" id="email" name="email" required></input>
      <label>Contraseña</label>
      <input onChange={handleInputChangeFunction} type="password" id="passwordId" name="password" minLength='5' maxLength='20' required></input>
      <div className="children">{children}</div>
      <button>{textoBoton}</button>
    </form>
  );
};
