import "./style.css";
import PropTypes from 'prop-types'
export const FormLoginAndRegister = ({ textoBoton, children, handleInputChangeFunction, handleSubmitFunction }) => {
  return (
    <form className="form" onSubmit={handleSubmitFunction}>
      <label htmlFor="email">Email</label>
      <input onChange={handleInputChangeFunction} type="email" id="email" name="email" required></input>
      <label>Contraseña</label>
      <input onChange={handleInputChangeFunction} type="password" id="passwordId" name="password" minLength="5" maxLength="20" required></input>
      <div className="children">{children}</div>
      <button>{textoBoton}</button>
    </form>
  );
};

FormLoginAndRegister.propTypes = {
  textoBoton:PropTypes.string,
  children: PropTypes.any,
  handleInputChangeFunction:PropTypes.func.isRequired,
  handleSubmitFunction: PropTypes.func.isRequired,
}