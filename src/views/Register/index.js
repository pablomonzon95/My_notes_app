import './style.css'
import { Form } from "../../Components/Form";
export const Register = () => {
  return (
    <div className="form">
      <Form textoBoton="Register">
        <div className='extra-input'>
      <label htmlFor="repetiremail"> Repetir Contraseña</label>
      <input type="password" id="repetiremail" name="repetiremail"></input>
      </div>
      </Form>
    </div>
  );
};
