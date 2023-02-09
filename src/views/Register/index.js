import "./style.css";
import swal from "sweetalert";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";

export const Register = () => {
  const navigate = useNavigate();

  const [registerData, setregisterData] = useState({
    email: "",
    password: "",
  });

  const handleInputChangeRegister = (e) => {
    let { name, value } = e.target;
    if (name !== "repetir email") {
      let newData = { ...registerData, [name]: value };
      setregisterData(newData);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const password1= e.target.password.value;
    const password2= e.target.repetirpassword.value;

    if (password1 === password2) {
      try {
        await axios.post("http://localhost:8000/users", registerData);
        swal(
          "Registro exitoso",
          "por favor revisa la casilla de correo para activar tu cuenta",
          "success"
        );
        navigate(`/login`);
      } catch (error) {
        swal("An error has occured", error.response.data.message, "error");
      }
    } else {
      swal("paswords must be the same", 'please check them out', "error");
    }
    
    

  };
  return (
    <div className="formRegister">
      <Header tituloVista="Register"></Header>
      <Form
        handleInputChangeFunction={handleInputChangeRegister}
        handleSubmitFunction={handleSubmitRegister}
        textoBoton="Register"
      >
        <div className="extra-input">
          <label htmlFor="repetipasswordId"> Repetir Contraseña</label>
          <input type="password" id="repetirpasswordId" name="repetirpassword" ></input>
        </div>
      </Form>
      <Footer></Footer>
    </div>
  );
};
