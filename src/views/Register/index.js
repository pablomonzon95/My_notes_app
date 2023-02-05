import "./style.css";

import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
export const Register = () => {
  return (
    <div className="formRegister">
      <Header></Header>
      <Form textoBoton="Register">
        <div className="extra-input">
          <label htmlFor="repetiremail"> Repetir Contraseña</label>
          <input type="password" id="repetiremail" name="repetiremail"></input>
        </div>
      </Form>
      <Footer></Footer>
    </div>
  );
};
